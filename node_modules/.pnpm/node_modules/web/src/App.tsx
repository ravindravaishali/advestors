import { Outlet, Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/login", label: "Login" },
  { to: "/dashboard", label: "Dashboard" },
];

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-gray-900 text-white px-6 py-4 shadow">
        <div className="max-w-5xl mx-auto flex gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={clsx(
                "hover:text-yellow-400 transition",
                pathname === l.to && "font-semibold text-yellow-400"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
