// ParkingPass.js
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ParkingPassDetailsModal from './ParkingPassDetailsModal';

const ParkingPass = ({
  price,
  lot,
  seller,
  contactInfo,
  additionalDetails,
  onPassClick,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
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
      <Card.Body
        onClick={() => {
          setShowModal(true);
        }}>
        <Card.Title>Lot: {lot}</Card.Title>
        <Card.Text>
          Price: ${price}
          <br />
          Seller: {seller}
          <br />
        </Card.Text>
      </Card.Body>
      <ParkingPassDetailsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        lot={lot}
        price={price}
        seller={seller}
        contactInfo={contactInfo}
        additionalDetails={additionalDetails}
      />
    </Card>
  );
};

export default ParkingPass;
