import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/book-swap.png';
import search from '../../assets/search.png';

import "./CourseSwapPage.css";

function CourseSwapPage() {
  return (
    <div className="swap-container">

      <div className="side-tab">
        <img src={logo} alt="course-swap-logo" width={"50%"}></img>
        <div className="side-list">
          <Link>Find</Link>
          <Link>Offer</Link>
          <Link>Schedule</Link>
          <Link>Saved</Link>
        </div>
        
      </div>

      <div className="search">
        <input type="text" placeholder="Search" id="search-input"></input>
        <img id="search-img" src={search} alt="search" width={"30vh"}></img>
        <button id="sort">SORT</button>
        <button id="filter">FILTER</button>
      </div>

    </div>
  );
}

export default CourseSwapPage;
