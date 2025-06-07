import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function Dashboard() {
  const [status, setStatus] = useState<"loading" | "up" | "down">("loading");

  useEffect(() => {
    api.get("/api/health")
      .then(() => setStatus("up"))
      .catch(() => setStatus("down"));
  }, []);

  let message;
  if (status === "loading") message = "Checking API…";
  else if (status === "up") message = "✅ API is online";
  else message = "❌ API unreachable";

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
}
