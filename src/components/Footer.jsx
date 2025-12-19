import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        {/* Column 1 - About */}
        <div className="footer-col">
          <h3 className="footer-title">Echo Chamber</h3>
          <p className="footer-text">
            Echo Chamber is a community-driven platform designed to help users 
            explore trending discussions, track topic insights, and stay aware 
            of how information spreads online.
          </p>
          <p className="footer-text">
            Our mission is to empower users with awareness, encourage 
            meaningful conversations, and promote responsible information sharing.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div className="footer-col">
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Echo Chamber</a></li>
            <li><a href="/topics">Trending Topics</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div className="footer-col">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">User Guidelines</a></li>
            <li><a href="#">Community Standards</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>

          <p className="footer-contact"><FaEnvelope /> support@echochamber.com</p>
          <p className="footer-contact"><FaPhone /> +91 98765 43210</p>
          <p className="footer-contact"><FaMapMarkerAlt /> Pune, Maharashtra, India</p>

          <h4 className="footer-heading social-title">Follow Us</h4>
          <div className="footer-social">
            <a><FaFacebookF /></a>
            <a><FaTwitter /></a>
            <a><FaInstagram /></a>
            <a><FaLinkedin /></a>
          </div>
        </div>

        {/* Column 5 - Newsletter */}
        <div className="footer-col">
          <h4 className="footer-heading">Stay Updated</h4>
          <p className="footer-text">
            Subscribe to our newsletter and stay informed about new features, 
            trending topics, and platform updates.
          </p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom Divider */}
      {/* <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Echo Chamber. All Rights Reserved.</p>
        <p className="footer-credit">Designed & Developed by Echo Chamber Team</p>
      </div> */}

    </footer>
  );
};

export default Footer;
