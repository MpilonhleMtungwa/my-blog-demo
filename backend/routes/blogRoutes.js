/*
const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { authenticate } = require("../../src/middleware/authMiddleware");
const router = express.Router();

// Blog routes
router.post("/", authenticate, createBlog); // Create blog
router.get("/", getBlogs); // Get all blogs
router.get("/:id", getBlogById); // Get blog by ID
router.put("/:id", authenticate, updateBlog); // Update blog
router.delete("/:id", authenticate, deleteBlog); // Delete blog

module.exports = router;
*/
const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

// Add a new blog post
router.post("/add", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({
      title,
      content,
      author,
    });
    await newBlog.save();
    res.status(201).json({ message: "Blog post created successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create blog post", error: error.message });
  }
});

// Get all blog posts
router.get("/all", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blog posts", error: error.message });
  }
});

module.exports = router;
