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

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Blog not found" });
    }

    res.status(500).send("Server error");
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
  const { title, content, author, image, description } = req.body;

  if (!title || !content || !author || !description) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const newBlog = new Blog({
      title,
      content,
      author,
      image,
      description,
    });

    const blog = await newBlog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
