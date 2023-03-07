import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/book-swap.png';
import search from '../../assets/search.png';
import { useState } from 'react';

import './CourseSwapPage.css';
import '../MainTheme.css';

// disable eslint for Links right now
/* eslint-disable */
function CourseSwapPage() {
  const [courseFilterTab, setCourses] = useState('false');
  const [courseSortTab, setSort] = useState('false');
  const toggleCourses = () => {
    ToggleAll();
    setCourses(!courseFilterTab);
  };
  const toggleSort = () => {
    ToggleAll();
    setSort(!courseSortTab);
  };
  const ToggleAll = () => {
    if (!courseFilterTab) {
      setCourses(!courseFilterTab);
    }
    if (!courseSortTab) {
      setSort(!courseSortTab);
    }
  };

  return (
    <div className="swap-container">
      <div className={courseFilterTab ? 'hideC popupC' : 'showC popupC'}>
        Course filters
      </div>
      <div className={courseSortTab ? 'hideC popupC' : 'showC popupC'}>
        Course Sorts
      </div>

      {/*div for sidebar with pages in CourseSwap*/}
      <div className="side-tab">
        <img src={logo} alt="course-swap-logo" width={'50%'} />
        <div className="side-list">
          {/* TODO: fix links/buttons */}
          <Link className="text-link">Find</Link>
          <Link className="text-link">Offer</Link>
          <Link className="text-link">Schedule</Link>
          <Link className="text-link">Saved</Link>
        </div>
      </div>

      {/*div for search tab*/}
      <div className="search">
        <input type="text" placeholder="Search" id="search-input" />
        <img id="search-img" src={search} alt="search" />
        <button type="button" id="sort" onClick={toggleSort}>
          SORT
        </button>
        <button type="button" id="filter" onClick={toggleCourses}>
          FILTER
        </button>
      </div>

      {/*div for main course swap content*/}
      <div className="content">
        <div>
          <div id="user">ShaHos348</div>
          <div id="gap"></div>
          <div id="tabs">
            <button className="tab-links">Offered</button>
            <button className="tab-links">Requested</button>
          </div>
        </div>
        <div id="name">POLS 1101 - American Government</div>
        <div id="instructor">Shahbin Hossain</div>
        <div id="crn">42069</div>
        <div id="time">[------]</div>
        <div id="location">Park Hall</div>
        <button id="option">DEAL</button>
      </div>
    </div>
  );
}

export default CourseSwapPage;
