import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <TodoForm onAddTask={handleAddTask} />

      <TodoFilters filter={filter} onFilterChange={setFilter} />

      <p className="task-counter">
        Total Tasks: {tasks.length}
      </p>

      <TodoList tasks={filteredTasks} />

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default TodoPage;