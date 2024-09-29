import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import your CSS for styling
import mylogo from "../pictures/iconnav.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src={mylogo}
            alt="Logo"
            href="https://icons8.com/icon/13651/google-blog-search"
          />
          <span>Blogue</span>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/createpost">Create Blog</Link>
          </li>
          <li>
            <a href="#">Feeds</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
