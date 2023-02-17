import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/book-swap.png';

import "./CourseSwapPage.css";

function CourseSwapPage() {
  return (
    <div className="main-container">

      <div className="side-tab">
        <img id="logo" src={logo} alt="course-swap-logo"></img>
        <Link>Find</Link>
        <Link>Offer</Link>
        <Link>Schedule</Link>
        <Link>Saved</Link>
      </div>

      <div className="search">
        <input type="text" placeholder="Search"></input>
      </div>

    </div>
  );
}

export default CourseSwapPage;
