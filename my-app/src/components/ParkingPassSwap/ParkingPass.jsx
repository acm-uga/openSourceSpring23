// ParkingPass.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ParkingPass = props => {
  return (
    <Card className="pass-container mb-4" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Lot: {props.lot}</Card.Title>
        <Card.Text>
          Price: {props.price}
          <br />
          Seller: {props.seller}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ParkingPass;
