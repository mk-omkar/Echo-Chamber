import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../styles/echo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Echo Chamber Logo" className="logo-image" />
            <div className="logo-text">
              <h1 className="logo">Echo Chamber</h1>
              <p className="tagline">Analyze media bias with data</p>
            </div>
          </Link>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about')}`}
            onClick={closeMenu}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}

export default Header;
