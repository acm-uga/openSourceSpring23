import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Route, Router } from 'react-router-dom';
import './TextBook.css';
import '../MainTheme.css';
import './TextBookModal.jsx';
import Profile from '../ProfilePage/Profile';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TextBookModal from './TextBookModal.jsx';

/* eslint-disable */
function TextBookPage() {
  const [price, setPrice] = useState(false);
  <div className={price ? 'hide popup' : 'show popup'}>
    <input type="text" placeholder="$90"></input>
  </div>;

  const TogglePrice = () => {
    setPrice(true);
  };
  // Set the contentes of the profileTab

  //set onclick function so that it changes the show value from false to true and vice versa

  //have something to make the page show vs not show when the state value for the profiletab is true vs false

  return (
    <div className="textbook-container">
      <div className="side-tab">
        <div className="side-list">
          {/* TODO: fix links/buttons */}
          <button className="button" onClick={TogglePrice}>
            Price
          </button>
          <button className="button">Condition</button>
        </div>
      </div>

      <div className="searchbar">
        <div className="search_dropdown">
          <select className="dropdown">
            <option value="ISBN">ISBN</option>
            <option value="Title">Book Title</option>
            <option value="Version">Book Version</option>
            <option value="Author">Author Name</option>
          </select>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" id="search-input" />
          {/* <img id="search-img" src={search} alt="search" width="30vh" /> */}
        </div>
        <div className="search_dropdown">
          <select className="dropdown">
            <option value="ISBN">ISBN</option>
            <option value="Title">Book Title</option>
            <option value="Version">Book Version</option>
            <option value="Author">Author Name</option>
          </select>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" id="search-input" />
          {/* <img id="search-img" src={search} alt="search" width="30vh" /> */}
        </div>
        <button type="button" className="search-button">
          Search
        </button>
      </div>

      <div className="row px-4">
        <div className="col-sm-3">
          <BookBlock
            author={'Bob Bobert'}
            title={'Data Structures & Algos in Java'}
            seller={'Yushus Komarlu'}
            price={57.0}
            condition={'New'}
            imageURL={
              'https://m.media-amazon.com/images/I/61s6zH2bbIL._SX260_.jpg'
            }></BookBlock>
        </div>

        <div className="col-sm-3">
          <BookBlock
            author={'Bob Bobert'}
            title={'Data Structures & Algos in Java'}
            seller={'Yushus Komarlu'}
            price={57.0}
            condition={'New'}
            imageURL={
              'https://m.media-amazon.com/images/I/61s6zH2bbIL._SX260_.jpg'
            }></BookBlock>
        </div>
      </div>
    </div>
  );
}

function BookBlock({ author, title, seller, price, condition, imageURL }) {
  const [profileTab, setProfile] = useState('false');

  const ToggleAll = () => {
    if (!profileTab) {
      setProfile(!profileTab);
    }
  };

  const ToggleProfile = () => {
    ToggleAll();
    setProfile(!profileTab);
  };

  return (
    <div className="bookblock" style={{ width: 12 + 'rem' }}>
      <img
        className="card-img-top"
        height={200}
        src={imageURL}
        alt="Card image cap"></img>
      <div className="card-body">
        <h6 className="card-title">Title: {title}</h6>
        <h6 className="card-subtitle">Author: {author}</h6>
        <br />
        <div className="col">
          <img
            className="profile-pic"
            src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
            onClick={ToggleProfile}
            width="100"
            height="100"></img>
          <div>
            <TextBookModal
              show={profileTab}
              onHide={() => setProfile(false)}></TextBookModal>
          </div>
          <div>
            <p className="card-text">Username: {seller}</p>
          </div>
          <p className="card-text">Price: ${price}</p> <br />
          <p className="card-text">Condition: {condition}</p>
          <a href="#" className="btn btn-primary">
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default TextBookPage;
