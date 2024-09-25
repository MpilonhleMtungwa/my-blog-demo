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
// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// Fetch all blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// Create a new blog post
router.post("/add", async (req, res) => {
  try {
    const { title, content, author, image } = req.body;
    const newBlog = new Blog({ title, content, author, image });
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create blog post" });
  }
});

module.exports = router;
