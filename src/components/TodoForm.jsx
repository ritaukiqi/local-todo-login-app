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
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          className="w-full sm:flex-1 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
        />

        <button
          className="w-full sm:w-28 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg transition"
          type="submit"
        >
          Add
        </button>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-300 bg-red-500/10 p-3 rounded-lg">
          {error}
        </p>
      )}
    </form>
  );
}

export default TodoForm;