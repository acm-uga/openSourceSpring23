import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Profile from '../ProfilePage/Profile';

const ParkingPass = props => {
  <div className="bookblock" style={{ width: 12 + 'rem' }}>
    <div className="card-body">
      <h6 className="card-title">Lot: {props.lot}</h6>
      <h6 className="card-title">Price: {props.price}</h6>
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
        <p className="card-text">Seller: {props.seller}</p>
      </div>
    </div>
  </div>;
};
