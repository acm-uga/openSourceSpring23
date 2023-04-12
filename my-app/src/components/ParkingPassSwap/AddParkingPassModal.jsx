// AddParkingPassModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddParkingPassModal = ({ show, onHide, onSubmit }) => {
  const [addPassState, setAddPassState] = useState({
    lot: '',
    price: 0,
    seller: '',
    contactInfo: '',
    additionalDetails: '',
  });

  const handleSubmit = () => {
    onSubmit(addPassState);
    onHide();
    postPass();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setAddPassState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36);
    return dateString + randomness;
  };

  const postPass = () => {
    fetch('http://localhost:8080/api/parking/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uniqueId(),
        ...addPassState,
      }),
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Parking Pass</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Price ($)</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={addPassState.price}
              onChange={handleChange}
              style={{
                width: '50%',
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Seller</Form.Label>
            <Form.Control
              name="seller"
              type="text"
              value={addPassState.seller}
              onChange={handleChange}
              style={{
                width: '50%',
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lot</Form.Label>
            <Form.Select
              name="lot"
              value={addPassState.lot}
              onChange={handleChange}
              style={{
                width: '50%',
              }}>
              <option>North Deck</option>
              <option>South Deck</option>
              <option>East Deck</option>
              <option>STEM Deck</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Info</Form.Label>
            <Form.Control
              name="contactInfo"
              type="text"
              value={addPassState.contactInfo}
              onChange={handleChange}
              style={{
                width: '50%',
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Additional Details</Form.Label>
            <Form.Control
              name="additionalDetails"
              type="text"
              value={addPassState.additionalDetails}
              onChange={handleChange}
              style={{
                width: '50%',
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: 'center',
        }}>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Parking Pass
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddParkingPassModal;
