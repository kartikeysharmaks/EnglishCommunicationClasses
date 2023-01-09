import React from "react";
import "./Hamburger.css";
import { AiOutlineClose } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const HamburgerMenu = ({ onClick }) => {
  return (
    <Fade right>
      <div className="menu">
        <div className="closeicon">
          <AiOutlineClose className="icon" onClick={onClick} />
        </div>

        <div className="list">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default HamburgerMenu;
