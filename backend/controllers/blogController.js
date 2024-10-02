const Blog = require("../models/Blog");
const Post = require("../models/Post");
const User = require("../models/User");

// Create new blog post
// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, content, description, image } = req.body;

    // Ensure req.user is defined
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const newBlog = new Blog({
      title,
      content,
      author: req.user._id, // Author is the logged-in user
      description,
      image:
        image ||
        "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg",
    });

    await newBlog.save();
    res.status(201).json(newBlog); // Return the newly created blog post
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.status(200).json(blogs); // Status 200 for success
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get a single blog post by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" }); // Status 404 for not found
    }

    res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getMyBlogs = async (req, res) => {
  try {
    // Find blogs where the author is the logged-in user
    const blogs = await Blog.find({ author: req.user._id });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a blog post (only author can update)
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Ensure only the author or an admin can update the blog
    if (blog.author.equals(req.user._id)) {
      // Using `equals` to compare ObjectIds
      const { title, content, description } = req.body;

      // Update the fields if provided
      blog.title = title || blog.title;
      blog.content = content || blog.content;
      blog.description = description || blog.description;

      await blog.save();
      return res.status(200).json(blog);
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
/*
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    console.log("Blog author:", blog.author); // Log to check the author
    console.log("User trying to edit:", req.user._id); // Log to check the logged-in user

    // Ensure only the author or an admin can update the blog
    if (blog.author.toString() !== req.user._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, content, description } = req.body;

    // Update the fields if provided
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.description = description || blog.description;

    await blog.save();
    res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
*/
// Delete a blog post (only author can delete)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Check if req.user is populated correctly
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Unauthorized, no user found" });
    }

    // Ensure only the author can delete the blog
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await blog.deleteOne();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
