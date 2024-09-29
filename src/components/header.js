import React from "react";
import "../styles/header.css"; // Import your CSS for styling
import myImage from "../pictures/headerpic.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-image-wrapper">
        <img src={myImage} alt="header" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
