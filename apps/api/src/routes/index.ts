import { Router } from "express";

const router = Router();

/**
 * GET /api/health
 * Basic liveness probe so you know the API is up.
 */
router.get("/health", (_req, res) => {
  res.status(200).json({ ok: true, message: "API is healthy 🎉" });
});

export default router;            //  ←  default export (important!)
