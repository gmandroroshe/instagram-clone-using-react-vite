import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Instagram</div>
      <div className="navbar__search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar__icons">
        <span>📸</span>
        <span>❤️</span>
        <span>✉️</span>
      </div>
      <div className="navbar__profile" onClick={toggleDropdown}>
        <img src="https://via.placeholder.com/40" alt="User Avatar" />
        {dropdownOpen && (
          <div className="navbar__dropdown">
            <a href="#profile">Profile</a>
            <a href="#settings">Settings</a>
            <a href="#logout">Logout</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
