import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/book-swap.png';
import search from '../../assets/search.png';

import './CourseSwapPage.css';
import '../MainTheme.css';

// disable eslint for Links right now
/* eslint-disable */
function CourseSwapPage() {
  return (
    <div className="swap-container">
      <div className="side-tab">
        <img src={logo} alt="course-swap-logo" width={"50%"}/>
        <div className="side-list">
          {/* TODO: fix links/buttons */}
          <Link className='text-link'>Find</Link>
          <Link className='text-link'>Offer</Link>
          <Link className='text-link'>Schedule</Link>
          <Link className='text-link'>Saved</Link>
        </div>
      </div>

      <div className="search">
        <input type="text" placeholder="Search" id="search-input" />
        <img id="search-img" src={search} alt="search" width="30vh" />
        <button type="button" id="sort">
          SORT
        </button>
        <button type="button" id="filter">
          FILTER
        </button>
      </div>
    </div>
  );
}

export default CourseSwapPage;
