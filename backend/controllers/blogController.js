const Blog = require("../models/blog");

// Create new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({
      title,
      content,
      author: req.user.id, // Ensure the user is authenticated
    });
    await newBlog.save();
    res.json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single blog post
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name");
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a blog post (only author or admin can update)
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Ensure only the author or an admin can update the blog
    if (blog.author.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, content } = req.body;
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a blog post (only author or admin can delete)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Ensure only the author or an admin can delete the blog
    if (blog.author.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await blog.remove();
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
