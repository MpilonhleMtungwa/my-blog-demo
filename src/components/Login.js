import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src="loginpic.webp"
          alt="Login Illustration"
          className="login-image"
        />
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
          <p className="register-link">
            Don't have an account? <a href="#">Register</a>
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

export default Login;
