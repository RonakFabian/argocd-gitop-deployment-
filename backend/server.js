// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Fake todo data
let todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a Node API" },
  { id: 3, text: "Connect frontend to backend" },
];

// GET /api/todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add new todo
app.post("/api/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text };
  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
