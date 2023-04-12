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
function CourseSwapPagePersonal() {
  return (
    <div className="swap-container">
      {/*div for sidebar with pages in CourseSwap*/}
      <SideBar />

      {/*div for search tab*/}
      <AddBar />

      {/*div for main course swap content*/}
      <CourseSwapContent />
    </div>
  );
}

function CourseSwapContent() {
  return (
    <ul className="cs-content">
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
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
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
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
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
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
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
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
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
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
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
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
        <Link to="../course-swap" className="text-link">
          Find
        </Link>
        <Link to="" className="text-link">
          Offer
        </Link>
        <Link to="../course-swap/saved" className="text-link">
          Saved
        </Link>
      </div>
    </div>
  );
}

function AddBar() {
  return (
    <div className="cs-search">
      <label className="cs-page-titles">Personal Offers</label>
      <button type="button" id="cs-addBtn">
        Add Course
      </button>
    </div>
  );
}

export default CourseSwapPagePersonal;
