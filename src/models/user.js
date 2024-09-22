const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "author"], default: "author" },
});

module.exports = mongoose.model("User", userSchema);
