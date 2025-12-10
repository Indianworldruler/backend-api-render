import express from "express";
import {
  getNewsFeed,
  saveArticle,
  getSavedArticles,
  deleteSavedArticle
} from "../controllers/newsController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getNewsFeed);
router.post("/save", verifyToken, saveArticle);
router.get("/saved", verifyToken, getSavedArticles);
router.delete("/saved/:id", verifyToken, deleteSavedArticle);

export default router;
