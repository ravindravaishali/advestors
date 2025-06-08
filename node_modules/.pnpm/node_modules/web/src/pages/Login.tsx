import { useState } from "react";
import { api } from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await api.post("/api/auth/login", { email, password });
      setMessage("✅ Logged in (fake for now)");
    } catch (err: any) {
      setMessage("❌ Login failed (API not ready yet)");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl w-full max-w-sm p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Sign in</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded transition disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>

        {message && (
          <p className="text-center text-sm mt-4">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
