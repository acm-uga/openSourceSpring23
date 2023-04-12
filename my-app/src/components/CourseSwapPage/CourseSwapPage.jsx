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
      {/*div for sidebar with pages in CourseSwap*/}
      <SideBar />

      {/*div for search tab*/}
      <SearchBar />

      {/*div for main course swap content*/}
      <CourseSwapContent />
      <CourseSwapContent />
      <CourseSwapContent />
    </div>
  );
}

function CourseSwapContent() {
  return (
    <ul className="cs-content">
      <li className="cs-subcontent">
        <div id="user">Terry Boi James</div>
        <div id="gap"></div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[------]</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[------]</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DEAL</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">No Girls Jeffrey</div>
        <div id="gap"></div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">CSCI 1302 - Software Development</div>
                <div id="instructor">Shah Bin Hossain</div>
                <div id="crn">69420</div>
                <div id="time">[------]</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[------]</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DEAL</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Downbad Augustin</div>
        <div id="gap"></div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[------]</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[------]</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DEAL</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Engineer Eddie</div>
        <div id="gap"></div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[------]</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[------]</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DEAL</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">xxxDaddySha69</div>
        <div id="gap"></div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[------]</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[------]</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DEAL</button>
      </li>
    </ul>
  );
}

function SideBar() {
  return (
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
    <div className="cs-search">
      <div className={courseFilterTab ? 'hide cs-popup' : 'show cs-popup'}>
        <h3>Filters</h3>
        <div id="cs-filter-content">
          <div className="cs-filter-subcontent">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="cs-filter-subcontent">
            <label>Course Number</label>
            <input type="text" placeholder="Course Number" />
          </div>
          <div className="cs-filter-subcontent">
            <label>Location</label>
            <input type="text" placeholder="Location" />
          </div>
          <div className="cs-filter-subcontent">
            <label>Instructor</label>
            <input type="text" placeholder="Instructor" />
          </div>
          <button className="cs-filter-subcontent">FILTER</button>
        </div>
      </div>

      <div className={courseSortTab ? 'hide cs-popup' : 'show cs-popup'}>
        <h3>Sorts</h3>
        <div id="cs-sort-content">
          <button className="cs-sort-options">Title</button>
          <button className="cs-sort-options">Subject</button>
          <button className="cs-sort-options">Course Number</button>
          <button className="cs-sort-options">CRN</button>
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
