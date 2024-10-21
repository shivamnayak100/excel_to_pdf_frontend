import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="navbar-content">
        <div className="navbar-title">PlaywithFile</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Word to PDF</Link>
          <Link to="/excel-to-pdf" className="navbar-link">Excel to PDF</Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
