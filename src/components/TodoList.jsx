import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggleDone, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-slate-400 mt-6">
        No tasks yet. Add your first task! 🚀
      </p>
    );
  }

  return (
    <ul className="space-y-3 mt-4">
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