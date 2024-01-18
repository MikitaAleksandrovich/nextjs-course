import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email adress." });
      return;
    }

    const client = await MongoClient.connect(
     
    );

    const db = client.db();

    await db.collection("email").insertOne({ email: userEmail });

    client.close();

    res.status(200).json({ message: "Signed up!" });
  }
};

export default handler;
