function TodoItem({ task, onToggleDone, onDeleteTask }) {
  return (
    <li className={`todo-item ${task.done ? "completed-task" : ""}`}>
      <span>{task.title}</span>

      <span className="task-status">
        {task.done ? " - Done" : " - Active"}
      </span>

      <div className="task-actions">
        <button onClick={() => onToggleDone(task.id)}>
          {task.done ? "Undo" : "Done"}
        </button>

        <button onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;