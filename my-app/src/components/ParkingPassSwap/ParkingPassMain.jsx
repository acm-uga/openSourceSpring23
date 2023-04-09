import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Route, Router } from 'react-router-dom';
import '../MainTheme.css';
import Profile from '../ProfilePage/Profile';
import ParkingPass from './ParkingPass';

const ParkingPassMain = () => {
  const [passes, setPasses] = useState([]);

  const getPasses = async () => {
    const response = await fetch(
      'http://localhost:8080/api/parking/getParkingPassAll'
    );
    const json = await response.json();
    setPasses(json);
  };

  useEffect(() => {
    getPasses();
  }, []);

  if (passes.length === 0) {
    return <div>Loading Parking Passes....</div>;
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
            <option value="Lot">Lot</option>
            <option value="Price">Price</option>
          </select>
        </div>
      </div>
      {passes.map((pass, index) => {
        return <ParkingPass {...pass} key={index} />;
      })}
    </div>
  );
};

export default ParkingPassMain;
