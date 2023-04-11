// AddParkingPassModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddParkingPassModal = ({ show, onHide, onSubmit }) => {
  const [price, setPrice] = useState('');
  const [seller, setSeller] = useState('');
  const [lot, setLot] = useState('');

  const handleSubmit = () => {
    onSubmit({ price, seller, lot });
    onHide();
    postPass();
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
        price: price,
        seller: seller,
        lot: lot,
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
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              style={{
                width: '50%',
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Seller</Form.Label>
            <Form.Control
              type="text"
              value={seller}
              onChange={e => setSeller(e.target.value)}
              style={{
                width: '50%',
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lot</Form.Label>
            <Form.Select
              value={lot}
              onChange={e => setLot(e.target.value)}
              style={{
                width: '50%',
              }}>
              <option>North Deck</option>
              <option>South Deck</option>
              <option>East Deck</option>
              <option>STEM Deck</option>
            </Form.Select>
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
