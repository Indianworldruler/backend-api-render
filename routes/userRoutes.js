import express from "express";
import { getPreferences, updatePreferences } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/preferences", authMiddleware, getPreferences);
router.post("/preferences", authMiddleware, updatePreferences);

export default router;
