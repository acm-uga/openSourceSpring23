import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Route, Router } from 'react-router-dom';
import '../TextbookPage/TextBook.css';
import '../MainTheme.css';
import Profile from '../ProfilePage/Profile';

const ParkingPassMain = () => {
  const [passes, setPasses] = useState([]);

  const getPasses = async () => {
    await fetch('http://localhost:8080/api/ParkingPassGetAll')
      .then(response => response.json())
      .then(json => setPasses(json));
  };

  useEffect(() => {
    getPasses();
  }, []);

  if (passes.length === 0) {
    return <div>Loading Passes</div>;
  }

  return (
    <div className="textbook-container">
      <div className="side-tab">
        <div className="side-list">
          {/* TODO: fix links/buttons */}
          <Link className="text-link">Lot</Link>
          <Link className="text-link">Price</Link>
        </div>
      </div>

      <div className="searchbar">
        <div className="search">
          <input type="text" placeholder="Search" id="search-input" />
          {/* <img id="search-img" src={search} alt="search" width="30vh" /> */}
        </div>
        <div className="search_dropdown">
          <select name="cars" id="cars">
            <option value="Lot">ISBN</option>
            <option value="Price">Book Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};
