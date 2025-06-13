import express from "express";
import dotenv from "dotenv";

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "JavaScript Classic",
      content:
        "Why did the developer go broke? Because he used up all his cache.",
    },
    {
      id: 2,
      title: "Frontend Frustration",
      content: "Why don't programmers like nature? It has too many bugs.",
    },
    {
      id: 3,
      title: "Null Trouble",
      content: "How do you comfort a JavaScript bug? You console it.",
    },
    {
      id: 4,
      title: "Backend Burn",
      content:
        "Why did the Node.js developer quit his job? Because he didn’t get arrays.",
    },
    {
      id: 5,
      title: "React Woes",
      content:
        "Why was the React developer calm? Because he kept things in state.",
    },
  ];
  res.send(jokes)
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
