const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Add a comment to a blog post
router.post("/add", async (req, res) => {
  try {
    const { postId, name, comment } = req.body;
    const newComment = new Comment({ postId, name, comment });
    await newComment.save();
    res.json({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add comment", error });
  }
});

// Get comments for a specific blog post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch comments", error });
  }
});

module.exports = router;
