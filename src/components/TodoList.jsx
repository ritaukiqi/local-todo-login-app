import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggleDone, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <p className="empty-message">
        No tasks yet. Add your first task! 🚀
      </p>
    );
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleDone={onToggleDone}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;