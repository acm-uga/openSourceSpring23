import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TicketDetailsModal = ({
  team,
  price,
  seller,
  contactInfo,
  additionalDetails,
  onHide,
  show,
}) => {
  return (
    <Modal onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Ticket Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Lot: {team}</h5>
        <h5>Price: ${price}</h5>
        <h5>Seller: {seller}</h5>
        <h5>Contact Info: {contactInfo}</h5>
        <h5>Additional Detail: {additionalDetails}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketDetailsModal;
