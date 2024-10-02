const express = require("express");
const Post = require("../models/Post");
const Blog = require("../models/Blog");
const { verifyToken } = require("./AuthAPI");
const router = express.Router();

// Create Post (Admin or Author)
router.post("/create", verifyToken, async (req, res) => {
  const { title, content, author, image, description } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      author,
      image,
      description,
    });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blogs
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username"
    );
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update Post (Admin or Author)
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete Post (Admin or Author)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.remove();
    res.json({ message: "Post removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
