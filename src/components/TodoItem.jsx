function TodoItem({ task }) {
  return (
    <li className="todo-item">
      <span>{task.title}</span>
      <span className="task-status">
        {task.done ? " - Done" : " - Active"}
      </span>
    </li>
  );
}

export default TodoItem;