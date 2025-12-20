import express from "express";
import {
  getCourses,
  createCourse,
  saveActivity,
  getRecommendations,
} from "../controllers/course.controller.js"; // bien importer toutes les fonctions

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", authMiddleware, createCourse);
router.post("/activity", authMiddleware, saveActivity); // corrigé "saveActiviy" -> "saveActivity"
router.post("/recommendations", authMiddleware, getRecommendations); // utiliser POST pour recommandations

export default router;
