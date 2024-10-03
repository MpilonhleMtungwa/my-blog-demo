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
const { protect } = require("../middleware/authMiddleware");
const blogController = require("../controllers/blogController"); 

// Define routes
router.post("/create", protect, blogController.createBlog);
router.get("/", blogController.getBlogs);
router.get("/myblogs", protect, blogController.getMyBlogs);
router.get("/:id", blogController.getBlogById);
router.put("/:id", protect, blogController.updateBlog);
router.delete("/:id", protect, blogController.deleteBlog);


/*
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// Create a new blog post
router.post("/create", protect, async (req, res) => {
  console.log("Creating a new blog. User:", req.user);
  try {
    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id, // Using the user's name from the protect middleware

      image: req.body.image,
      description: req.body.description,
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Fetch user's blogs
router.get("/myblogs", protect, async (req, res) => {
  try {
    const blogs = await Blog.find({ authorId: req.user._id });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// Update a blog
router.put("/:id", protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // Ensure the logged-in user is the author
    if (blog.authorId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ msg: "Not authorized to edit this blog" });
    }

    // Update the blog fields with the new data from the request body
    blog.title = req.body.title || blog.title;
    blog.description = req.body.description || blog.description;
    blog.content = req.body.content || blog.content;

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// Fetch all blogs for a specific user (duplicate, could be removed)
router.get("/user-blogs", protect, async (req, res) => {
  try {
    const blogs = await Blog.find({ authorId: req.user._id });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});
*/
module.exports = router;

/*
router.post("/add", async (req, res) => {
  try {
    const { title, content, author, image, description } = req.body;
    console.log("User from req.user:", req.user); // Add a log here

    const newBlog = new Blog({
      title,
      content,
      author,
      image,
      description,
      authorId: req.user._id,
    });

    const blog = await newBlog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
*/
