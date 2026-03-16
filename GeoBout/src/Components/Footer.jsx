import React from "react";
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>GeoBout</h2>
          <p>Explore the world with clarity and insight.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@geoscope.com</p>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <a 
            href="https://www.linkedin.com/in/your-linkedin-id" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GeoScope. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

