// routes/blogPosts.routes.js
import express from "express";

import {
  getAllBlogPosts,
  addBlogPosts,
  getSinglePost,
  updateSingleBlogPost,
  removeBlogPost,
  likeBlogPost,
} from "../controllers/blogPosts.controller.js";

const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/", addBlogPosts);
router.get("/:id", getSinglePost);
router.patch("/:id", updateSingleBlogPost);
router.delete("/:id", removeBlogPost);
router.patch("/:id/likedBlogPost", likeBlogPost);

export default router;