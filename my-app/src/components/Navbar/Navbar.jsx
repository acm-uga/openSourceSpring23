import React from 'react';
import { Link } from 'react-router-dom';
import bulldawg from '../../assets/bulldawg.png';
import search from '../../assets/search.png';
import house from '../../assets/house.png';
import book from '../../assets/book.png';
import bed from '../../assets/bed.png';
import profile from '../../assets/blank-profile.png';

import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="div1">
            <button type="button" className="home-button">
              <Link to="/">
                <img className="nav-image2" src={bulldawg} alt="Bulldawg" />
              </Link>
            </button>
            <div className="searchbar">
              <input
                className="searchbar-input"
                type="text"
                placeholder="Search..."
              />
              <button type="button" className="searchbutton">
                <img src={search} alt="Search Icon" />
              </button>
            </div>
          </div>
          <div className="div2">
            <button type="button" className="icon-button">
              <Link className="home-button" to="/">
                <img className="nav-image" src={house} alt="House" />
              </Link>
            </button>
            <button type="button" className="icon-button">
              <img className="nav-image" src={book} alt="Book" />
            </button>
            <button type="button" className="icon-button">
              <Link className="housing-button" to="/housing">
                <img className="nav-image" src={bed} alt="Bed" />
              </Link>
            </button>
            <button type="button" className="icon-button">
              <Link className="login-button" to="/login">
                <img
                  className="nav-image-profile"
                  src={profile}
                  alt="Blank Profile"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="div2">
        <button type="button" className="icon-button">
          <img className="nav-image" src={house} alt="House" />
        </button>
        <button type="button" className="icon-button">
          <img className="nav-image" src={book} alt="Book" />
        </button>
        <button type="button" className="icon-button">
          <img className="nav-image" src={bed} alt="Bed" />
        </button>
        <button type="button" className="icon-button">
          <Link className="login-button" to="/login">
            <img
              className="nav-image-profile"
              src={profile}
              alt="Blank Profile"
            />
          </Link>
        </button>
      </div>
    </>
  );
}

export default Navbar;
