import express from "express";
import { updateProgress } from "../controllers/progress.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, updateProgress);

export default router;
