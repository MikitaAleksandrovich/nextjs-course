const handler = (req, res) => {
  const eventId = req.query.eventId;

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
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res
      .status(201)
      .json({ message: "Comment was added.", comment: newComment });
  }

  if (req.method === "GET") {
    const mockComments = [
      {
        id: "c1",
        name: "Mikita",
        text: "A first comment",
      },
      {
        id: "c2",
        name: "John",
        text: "A second comment",
      },
    ];

    res.status(201).json({ comments: mockComments });
  }
};

export default handler;
