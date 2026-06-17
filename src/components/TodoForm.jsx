import { useState } from "react";

function TodoForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task cannot be empty.");
      return;
    }

    onAddTask(title);
    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => {setTitle(e.target.value);
        setError("");
       }}
      />

      <button type="submit">Add</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TodoForm;