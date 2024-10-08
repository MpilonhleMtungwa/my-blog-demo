const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const CommentsRoutes = require("./routes/CommentsRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "https://my-blog-demo.onrender.com" }));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Use blog routes
app.use("/api/blogs", blogRoutes);

//use comments
app.use("/api/comments", CommentsRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
