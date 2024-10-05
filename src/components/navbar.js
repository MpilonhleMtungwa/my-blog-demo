import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; 
import mylogo from "../pictures/iconnav.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createpost">Create Blog</Link>
          </li>
          <li>
            <Link to="/myblogs">My Blogs</Link>
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
