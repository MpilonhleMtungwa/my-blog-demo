import React from "react";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <img
          src="your-image-url.png"
          alt="Register Illustration"
          className="register-image"
        />
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required />
          </div>
          <button type="submit" className="register-btn">
            REGISTER
          </button>
          <p className="login-link">
            Already have an account? <a href="./components/login">Login</a>
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
