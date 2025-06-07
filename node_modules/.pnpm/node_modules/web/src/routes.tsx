import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);
