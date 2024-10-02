const mongoose = require("mongoose");

require("dotenv").config();
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String, // URL to the image
    required: false,
  },
  description: {
    // New field for the blog description
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
