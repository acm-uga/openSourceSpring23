import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/book-swap.png';
import search from '../../assets/search.png';
import { useState } from 'react';
import './CourseSwapPage.css';
import '../MainTheme.css';
import { CardTab, TabSwitcher, TabContent } from './Tab';

// disable eslint for Links right now
/* eslint-disable */
function CourseSwapPage() {
  return (
    <div className="swap-container">
      <div className="side-tab">
        <div className="side-list">
          {/* TODO: fix links/buttons */}
          <Link className="text-link">Find</Link>
          <Link className="text-link">Offer</Link>
          <Link className="text-link">Schedule</Link>
          <Link className="text-link">Saved</Link>
        </div>
      </div>

      <input type="text" placeholder="Search" id="cs-search-input" />
      <button id="cs-searchBtn">
        <img src={search} alt="search" />
      </button>
      <button type="button" id="cs-sortBtn" onClick={toggleSort}>
        SORT
      </button>
      <button type="button" id="cs-filterBtn" onClick={toggleCourses}>
        FILTER
      </button>
    </div>
  );
}

export default CourseSwapPage;
