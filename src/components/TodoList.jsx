import TodoItem from "./TodoItem";

function TodoList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet.</p>;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;