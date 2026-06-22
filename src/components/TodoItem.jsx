function TodoItem({ task, onToggleDone, onDeleteTask }) {
  return (
    <li className="bg-slate-800 rounded-xl p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center gap-3">
        <span
          className={`font-medium ${
            task.done ? "line-through text-slate-500" : "text-white"
          }`}
        >
          {task.title}
        </span>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            task.done
              ? "bg-green-500/20 text-green-300"
              : "bg-yellow-500/20 text-yellow-300"
          }`}
        >
          {task.done ? "Done" : "Active"}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggleDone(task.id)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          {task.done ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDeleteTask(task.id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;