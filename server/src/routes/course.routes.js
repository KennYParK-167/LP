import express from "express";
import { getCourses, createCourse } from "../controllers/course.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", authMiddleware, createCourse);
router.post("/activity", authMiddleware, saveActiviy);
router.get("/recommendations", authMiddleware, getRecommendations);

export default router;

