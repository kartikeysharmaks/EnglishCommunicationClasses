import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-items">
          <FaFacebook className="footer-item" />
          <FaInstagram className="footer-item" />
          <FaTwitter className="footer-item" />
          <FaYoutube className="footer-item" />
        </div>
        <div className="footer-detail">
          <div className="f-item">@EnglishCommunicationClasses2023</div>
          <div className="f-item">learn with us</div>
          <div className="f-item">join us</div>
          <div className="f-item">teach with us</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
