// ParkingPass.js
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ParkingPassDetailsModal from './ParkingPassDetailsModal';

const ParkingPass = props => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onClick={() => {
        setShowModal(true);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="pass-container mb-4"
      style={{
        width: '18rem',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}>
      <Card.Body>
        <Card.Title>Lot: {props.lot}</Card.Title>
        <Card.Text>
          Price: ${props.price}
          <br />
          Seller: {props.seller}
          <br />
        </Card.Text>
      </Card.Body>
      <ParkingPassDetailsModal
        lot={props.lot}
        price={props.price}
        seller={props.seller}
        contactInfo={'1234567890'}
        additionalDetails={'Meh'}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </Card>
  );
};

export default ParkingPass;
