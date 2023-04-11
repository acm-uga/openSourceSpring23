import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ParkingPassDetailsModal = (props, onHide, show) => {
  return (
    <Modal onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Parking Pass Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Lot: {props.lot}</h5>
        <h5>Price: ${props.price}</h5>
        <h5>Seller: ${props.seller}</h5>
        <h5>Contact Info: {props.contactInfo}</h5>
        <h5>Additional Detail: {props.additionalDetails}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ParkingPassDetailsModal;
