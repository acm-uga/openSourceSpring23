import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Route, Router } from 'react-router-dom';
import './TextBook.css';
import '../MainTheme.css';
import Profile from '../ProfilePage/Profile';

/* eslint-disable */
function TextBook() {
  return (
    <div className="textbook-container">
      <div className="side-tab">
        <div className="side-list">
          {/* TODO: fix links/buttons */}
          <Link className="text-link">Price</Link>
          <Link className="text-link">Condition</Link>
        </div>
      </div>

      {/* <div className="searchbar"> */}
        <div className="search">
          <input type="text" placeholder="Search" id="search-input" />
          {/* <img id="search-img" src={search} alt="search" width="30vh" /> */}
        </div>
        {/* <div className="search_dropdown">
          <select name="cars" id="cars">
            <option value="ISBN">ISBN</option>
            <option value="Title">Book Title</option>
            <option value="Version">Book Version</option>
            <option value="Author">Author Name</option>
          </select>
        </div> */}
      {/* </div> */}

      <div className="row px-4">
        <div className="col-sm-3">
          <div className="card" style={{ width: 12 + 'rem' }}>
            <img
              className="card-img-top"
              height={200}
              src="https://media.wiley.com/product_data/coverImage300/38/11187713/1118771338.jpg"
              alt="Card image cap"></img>
            <div className="card-body">
              <h6 className="card-title">Data Structures & Algos in Java</h6>
              <h6 className="card-subtitle">Author: Bob Bobert</h6>
              <br />
              <div className="col">
                {/* <Router> 
              <Routes>
              <Route path="/Profile" element={<Profile />}> 
                <img className="profile-pic"
                    src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
                    width="100"
                    height="100" />
              </Route>
              </Routes>
              </Router> */}
                <img
                  className="profile-pic"
                  src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
                  width="100"
                  height="100"></img>
              </div>
              <div>
                <p className="card-text">Username: Yushus Komarlu</p>
              </div>
              <p className="card-text">Price: $57.00</p> <br />
              <p className="card-text">Condition: New/Torn/Used/etc...</p>
              <a href="#" className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card" style={{ width: 12 + 'rem' }}>
            <img
              className="card-img-top"
              height={200}
              src="https://media.wiley.com/product_data/coverImage300/38/11187713/1118771338.jpg"
              alt="Card image cap"></img>
            <div className="card-body">
              <h6 className="card-title">Data Structures & Algos in Java</h6>
              <h6 className="card-subtitle">Author: Bob Bobert</h6>
              <br />
              <div className="col">
                <img
                  className="profile-pic"
                  src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
                  width="100"
                  height="100"></img>
              </div>
              <div>
                <p className="card-text">Username: Yushus Komarlu</p>
              </div>
              <p className="card-text">Price: $57.00</p> <br />
              <p className="card-text">Condition: New/Torn/Used/etc...</p>
              <a href="#" className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBook;
