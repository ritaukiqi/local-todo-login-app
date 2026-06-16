import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
    setError("Please fill in all fields.");
    return;
    }

    if (email === "intern@test.com" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    setError("");
    navigate("/todo");
    } else {
    setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;