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
    type: String, 
    required: false,
    default: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg",
  },
  description: {
    
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
