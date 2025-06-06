/**************************************************************************
 *  AdVestors – Backend API (Express 4 + TypeScript)
 **************************************************************************/

import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import router from "./routes/index"; // <- default export from routes/index.ts

const app = express();
const PORT = process.env.PORT || "4000";

/* ─ Middle-wares ─────────────────────────────────────────────────────── */
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

/* ─ Routes ───────────────────────────────────────────────────────────── */
app.use("/api", router); // /api/health etc.

/* ─ MongoDB connection ──────────────────────────────────────────────── */
if (!process.env.MONGO_URI) {
  throw new Error("❌  MONGO_URI missing in .env file");
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅  MongoDB connected");
  })
  .catch((err) => {
    console.error("❌  Mongo connection error:", err);
    process.exit(1);
  });

/* ─ Start the server ─────────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`🚀  API running on http://localhost:${PORT}/api/health`);
});
