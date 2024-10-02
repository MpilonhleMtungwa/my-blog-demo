/*
import React, { useState } from "react";
import axios from "axios"; // Don't forget to import axios
import { Link } from "react-router-dom"; // Import Link for navigation

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      setSuccess("Registration successful! You can now log in.");
      setError("");
    } catch (err) {
      setError("Error during registration");
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-btn">
            REGISTER
          </button>

         
          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}

          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
      <footer>
        <p>Copyright © 2020. All rights reserved.</p>
        <div className="social-icons">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Google</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Register;
*/
/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send registration data to backend (add API call here)
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      setSuccess("Registration successful! You can now log in.");
      setError("");
    } catch (err) {
      setError("Error during registration");
    }
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <img
          src="your-image-url.png"
          alt="Register Illustration"
          className="register-image"
        />
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required />
          </div>
          <button type="submit" className="register-btn">
            REGISTER
          </button>
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
      <footer>
        <p>Copyright © 2020. All rights reserved.</p>
        <div className="social-icons">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Google</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Register;
*/

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending POST request to register the user
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      // If registration is successful, show success message
      setSuccess("Registration successful! You can now log in.");
      setError("");

      // Optionally, clear the form fields after successful registration
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      // Handle different error responses from the server
      if (err.response && err.response.data.msg) {
        setError(err.response.data.msg); // Display the error message from the server
      } else {
        setError("Error during registration. Please try again.");
      }
      setSuccess("");
    }
  };
  return (
    <div className="form-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-btn">
            REGISTER
          </button>
          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
