import {
  connectToDB,
  getAllDocuments,
  insertDocument,
} from "@/helpers/db-utils";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectToDB();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    // Server side validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment.id = result.insertedId;

      res
        .status(201)
        .json({ message: "Comment was added.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }
  }

  if (req.method === "GET") {
    let comments;

    try {
      comments = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(201).json({ comments: comments });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Getting data failed!" });
      return;
    }
  }

  client.close();
};

export default handler;
