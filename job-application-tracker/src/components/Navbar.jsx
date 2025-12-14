import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          JobBoard <span className="logo-dot">.</span>
        </Link>

        <div className="nav-menu">
          {isLoggedIn ? (
            <>
              <span className="nav-welcome">Welcome, User</span>
              <button onClick={onLogout} className="nav-btn btn-logout">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-btn btn-login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;