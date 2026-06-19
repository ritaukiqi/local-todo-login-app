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
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <section className="w-full max-w-md bg-slate-900 text-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg outline-none placeholder:text-slate-400"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg outline-none placeholder:text-slate-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
            type="submit"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="mt-4 text-sm text-red-300 bg-red-500/10 p-3 rounded-lg">
            {error}
          </p>
        )}
      </section>
    </main>
  );
}

export default Login;