import { useNavigate } from "react-router-dom";

function TodoPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="todo-container">
      <h1>Todo Page</h1>

      <p>Welcome Rita 🎉</p>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default TodoPage;