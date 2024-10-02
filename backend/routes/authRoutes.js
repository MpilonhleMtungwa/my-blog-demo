const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware"); // Ensure correct path

// Register Route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);
// Get Logged-In User Info
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password from response
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(req.user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

/*
// Register route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Optionally, generate a JWT token if using authentication tokens
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login." });
  }
});
router.get("/me", auth, async (req, res) => {
  try {
    // req.user is set in the auth middleware after verifying the token
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

*/
