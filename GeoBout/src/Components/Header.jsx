import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav-wrapper">

        <div className="logo">
          <NavLink to="/">GeoBout</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? "nav show" : "nav"}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
            </li>
            <li>
              <NavLink to="/country" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Country</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;