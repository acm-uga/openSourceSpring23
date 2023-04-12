/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Profile from '../ProfilePage/Profile';

const Ticket = ({ name, location, team, price, seller }) => {
  return (
    <div className="bookblock" style={{ width: 12 + 'rem' }}>
      <div className="card-body">
        <h6 className="card-title">Name: {name}</h6>
        <h6 className="card-title">Team: {team}</h6>
        <br />
        <div className="col">
          <img
            className="profile-pic"
            src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
            width="100"
            height="100"
            alt="profile pic"></img>
        </div>
        <div>
          <p className="card-text">Username: {seller}</p>
        </div>
        <p className="card-text">Price: ${price}</p> <br />
        <p className="card-text">Location: {location}</p>
        <a href="#" className="btn btn-primary">
          View
        </a>
      </div>
    </div>
  );
};
export default Ticket;
