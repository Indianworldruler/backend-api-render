import express from "express";
import { getPreferences, updatePreferences } from "../controllers/userController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/preferences", verifyToken, getPreferences);
router.post("/preferences", verifyToken, updatePreferences);

export default router;
