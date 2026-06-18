import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";

function TodoPage() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleToggleDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");

    if (!confirmed) return;

    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  const completedTasks = tasks.filter((task) => task.done).length;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <TodoForm onAddTask={handleAddTask} />

      <TodoFilters filter={filter} onFilterChange={setFilter} />

      <div className="task-stats">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedTasks}</p>
      </div>

      <TodoList
        tasks={filteredTasks}
        onToggleDone={handleToggleDone}
        onDeleteTask={handleDeleteTask}
      />

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default TodoPage;