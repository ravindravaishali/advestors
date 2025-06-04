import "dotenv/config";
import express from "express";
import cors from "cors";

import router from "./routes/index";   //  ←  default-import the router

const app = express();
const PORT = process.env.PORT || "4000";

/* ─ Middle-wares ─────────────────────────────────────────────── */
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

/* ─ Routes ───────────────────────────────────────────────────── */
app.use("/api", router);              //  attaches /api/health, etc.

/* ─ Start the server ─────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`🚀  API running on http://localhost:${PORT}/api/health`);
});
