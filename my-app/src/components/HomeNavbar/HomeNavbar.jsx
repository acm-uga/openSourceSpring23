import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './HomeNavbar.css';

function HomeNavbar() {
  return (
    <div className="home-navbar">
      <div className="home-navbar--logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-flexbox">
        <div className="home-navbar--top">
          <h1>UGA Marketplace</h1>
          <div className="home-navbar--top-buttons">
            <Link to="/login">
              <button type="button" className="login-button">
                Login
              </button>
            </Link>
          </div>
        </div>
        <nav className="home-navbar--bottom">
          {/* list of links */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/textbooks">Textbooks</Link>
            </li>
            <li>
              <Link to="/course-swap">Course Swap</Link>
            </li>
            <li>
              <Link to="/housing">Student Housing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomeNavbar;
