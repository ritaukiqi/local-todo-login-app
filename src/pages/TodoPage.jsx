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
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  const completedTasks = tasks.filter((task) => task.done).length;

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-xl bg-slate-900 text-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>

        <TodoForm onAddTask={handleAddTask} />

        <TodoFilters filter={filter} onFilterChange={setFilter} />

        <div className="flex justify-between gap-4 text-sm text-blue-300 font-semibold my-4">
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed: {completedTasks}</p>
        </div>

        <TodoList
          tasks={filteredTasks}
          onToggleDone={handleToggleDone}
          onDeleteTask={handleDeleteTask}
        />

        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Logout
        </button>
      </section>
    </main>
  );
}

export default TodoPage;