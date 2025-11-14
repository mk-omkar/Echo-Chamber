import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Echo Chamber. All rights reserved.
        </p>
        <nav className="footer-nav">
          <a href="/about" className="footer-link">About</a>
        </nav>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
            🐦
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
            📘
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
            🔗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
