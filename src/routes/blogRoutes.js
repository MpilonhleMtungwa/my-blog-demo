const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { authenticate } = require("../middleware/authenticate");
const router = express.Router();

// Blog routes
router.post("/", authenticate, createBlog); // Create blog
router.get("/", getBlogs); // Get all blogs
router.get("/:id", getBlogById); // Get blog by ID
router.put("/:id", authenticate, updateBlog); // Update blog
router.delete("/:id", authenticate, deleteBlog); // Delete blog

module.exports = router;
