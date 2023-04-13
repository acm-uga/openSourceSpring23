// ParkingPass.js
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import TicketDetailsModal from './TicketDetailsModal';

const Ticket = ({
  price,
  team,
  seller,
  contactInfo,
  additionalDetails,
  onTicketClick,
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
        <Card.Title>Team: {team}</Card.Title>
        <Card.Text>
          Price: ${price}
          <br />
          Seller: {seller}
          <br />
        </Card.Text>
      </Card.Body>
      <TicketDetailsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        team={team}
        price={price}
        seller={seller}
        contactInfo={contactInfo}
        additionalDetails={additionalDetails}
      />
    </Card>
  );
};

export default Ticket;
