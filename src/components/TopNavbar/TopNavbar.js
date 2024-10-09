import React from 'react';
import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="navbar-content">
        <div className="navbar-title">Easy Techstack</div>
        <div className="navbar-links">
          <a href="/" className="navbar-link">Home</a>
          <a href="/blog" className="navbar-link">Blog</a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
