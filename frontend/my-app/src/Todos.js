import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL; // ✅ injected at build time

  useEffect(() => {
    fetch(`${API_URL}/api/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, [API_URL]);

  return (
    <div>
      <h1>Todo List</h1>

      {/* ✅ Show which backend is being used */}
      <p>
        <strong>API URL:</strong> {API_URL}
      </p>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
