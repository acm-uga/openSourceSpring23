import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/book.png';
import search from '../../assets/search.png';
import { useState } from 'react';
import './TutorPage.css';
import '../MainTheme.css';

// disable eslint for Links right now
/* eslint-disable */
function TutorPage() {
  return (
    <div className="swap-container">
      {/*div for sidebar with pages in CourseSwap*/}
      <SideBar />

      {/*div for search tab*/}
      <SearchBar />

      {/*div for main course swap content*/}
      <TutorPageContent />
    </div>
  );
}

function TutorPageContent() {
  return (
    <ul className="tutor-content">
      <div className="tutor-subcontent-request">
        <div className="tutor-card">
          <div id="tutor-name">
            Requesting - POLS 1101 - American Government
          </div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
      <div className="tutor-subcontent-request">
        <div className="tutor-card">
          <div id="tutor-name">
            Requesting - POLS 1101 - American Government
          </div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
      <div className="tutor-subcontent-offer">
        <div className="tutor-card">
          <div id="tutor-name">Offering - POLS 1101 - American Government</div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
      <div className="tutor-subcontent-request">
        <div className="tutor-card">
          <div id="tutor-name">
            Requesting - POLS 1101 - American Government
          </div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
      <div className="tutor-subcontent-offer">
        <div className="tutor-card">
          <div id="tutor-name">Offering - POLS 1101 - American Government</div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
      <div className="tutor-subcontent-offer">
        <div className="tutor-card">
          <div id="tutor-name">Offering - POLS 1101 - American Government</div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
      <div className="tutor-subcontent-request">
        <div className="tutor-card">
          <div id="tutor-name">
            Requesting - POLS 1101 - American Government
          </div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
      <div className="tutor-subcontent-offer">
        <div className="tutor-card">
          <div id="tutor-name">Offering - POLS 1101 - American Government</div>
          <div id="phone">Phone: 404-276-6240</div>
          <div id="email">Email: bgr28288@uga.edu</div>
        </div>
      </div>
    </ul>
  );
}

function SideBar() {
  return (
    <div className="side-tab">
      <img src={logo} alt="course-swap-logo" width={'50%'} />
      <div className="side-list">
        {/* TODO: fix links/buttons */}
        <Link className="text-link">Offer</Link>
        <Link className="text-link">Request</Link>
      </div>
    </div>
  );
}

function SearchBar() {
  const [courseFilterTab, setFilter] = useState('false');
  const [courseSortTab, setSort] = useState('false');
  const toggleCourses = () => {
    ToggleAll();
    setFilter(!courseFilterTab);
  };
  const toggleSort = () => {
    ToggleAll();
    setSort(!courseSortTab);
  };
  const ToggleAll = () => {
    if (!courseFilterTab) {
      setFilter(!courseFilterTab);
    }
    if (!courseSortTab) {
      setSort(!courseSortTab);
    }
  };

  return (
    <div className="tutor-search">
      <div
        className={courseFilterTab ? 'hide tutor-popup' : 'show tutor-popup'}>
        <h3>Filters</h3>
        <div id="tutor-filter-content">
          <div className="tutor-filter-subcontent">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <button className="tutor-filter-subcontent">FILTER</button>
        </div>
      </div>

      <div className={courseSortTab ? 'hide tutor-popup' : 'show tutor-popup'}>
        <h3>Sorts</h3>
        <div id="tutor-sort-content">
          <button className="tutor-sort-options">Title</button>
          <button className="tutor-sort-options">Subject</button>
          <button className="tutor-sort-options">Course Number</button>
          <button className="tutor-sort-options">CRN</button>
        </div>
      </div>

      <input type="text" placeholder="Search" id="tutor-search-input" />
      <button id="tutor-searchBtn">
        <img src={search} alt="search" />
      </button>
      <button type="button" id="tutor-sortBtn" onClick={toggleSort}>
        SORT
      </button>
      <button type="button" id="tutor-filterBtn" onClick={toggleCourses}>
        FILTER
      </button>
    </div>
  );
}

export default TutorPage;
