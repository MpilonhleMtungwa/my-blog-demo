const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/blogs", require("../backend/routes/blogRoutes")); // Placeholder route
app.use("/api/auth", require("../backend/routes/authRoutes")); // Placeholder route

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
