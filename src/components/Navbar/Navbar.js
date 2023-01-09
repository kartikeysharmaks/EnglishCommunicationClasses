import React, { useState } from "react";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const [showhamburger, setShowhamburger] = useState(false);
  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <img src={require("../../assets/IMG_20230109_122417.jpg")} alt="logo"/>
      </div>
      <div className="nav-list">
        <li>
          <a href="#home" className="nav-item">Home</a>
        </li>
        <li>
          <a href="#about" className="nav-item">About</a>
        </li>
        <li>
          <a href="#courses" className="nav-item">Courses</a>
        </li>
        <li>
          <a href="#contact" className="nav-item">Contact</a>
        </li>
      </div>
      <div className="icons">
        <div className="user-icon">
          <FaUser className="icon" />
        </div>
        <div className="menu-icon">
          <AiOutlineMenu
            className="icon"
            onClick={() => setShowhamburger(true)}
          />
        </div>
        {showhamburger && (
          <HamburgerMenu onClick={() => setShowhamburger(false)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
