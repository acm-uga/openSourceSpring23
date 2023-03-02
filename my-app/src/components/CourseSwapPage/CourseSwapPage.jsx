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
        <img id="search-img" src={search} alt="search"/>
        <button type="button" id="sort">
          SORT
        </button>
        <button type="button" id="filter">
          FILTER
        </button>
      </div>

      {/*div for main course swap content*/}
      <div className='content'>
        <div>
          <div id='user'>ShaHos348</div>
          <div id='tabs'>
            <button class="tablinks" onclick="open(event, 'Offer')">Offered</button>
            <button class="tablinks" onclick="open(event, 'Request')">Requested</button>
          </div>
        </div>
        <div id='name'>POLS 1101 - American Government</div>
        <div id='instructor'>Shahbin Hossain</div>
        <div id='crn'>42069</div>
        <div id='time'>[------]</div>
        <div id='location'>Park Hall</div>
        <div id='option'>DEAL</div>
      </div>
      
    </div>
  );
}

export default CourseSwapPage;
