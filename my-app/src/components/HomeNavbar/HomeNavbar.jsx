import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './HomeNavbar.css';

const HomeNavbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
            />
          </Link>
        </div>
        <div className='nav-flexbox'>
          <div className='top-nav'>
            <h1>UGA Marketplace</h1>
            {/* TODO add top navbar elements -> notifications, login button */}
          </div>
          <div className='bottom-nav'>
            {/* list of links */}
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/textbooks'>Textbooks</Link>
              </li>
              <li>
                <Link to='/course-swap'>Course Swap</Link>
              </li>
              <li>
                <Link to='/housing'>Housing </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
