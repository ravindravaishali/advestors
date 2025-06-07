import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Outlet />
    </div>
  );
}
