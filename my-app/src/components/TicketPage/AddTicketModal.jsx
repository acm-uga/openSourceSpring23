// AddParkingPassModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTicketModal = ({ show, onHide, onSubmit }) => {
  const [addTicketState, setAddTicketState] = useState({
    price: 0,
    team: 'Florida',
    seller: '',
    additionalDetails: '',
    contactInfo: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setAddTicketState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    postTicket();
    onSubmit(addTicketState);
    onHide();
  };

  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36);
    return dateString + randomness;
  };

  const postTicket = async () => {
    fetch('http://localhost:8080/api/tickets/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uniqueId(),
        ...addTicketState,
      }),
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Game/Event Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={addTicketState.price}
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
              value={addTicketState.seller}
              onChange={handleChange}
              style={{
                width: '50%',
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Team</Form.Label>
            <Form.Select
              name="team"
              value={addTicketState.lot}
              onChange={handleChange}
              style={{
                width: '50%',
              }}>
              <option>Florida</option>
              <option>Georgia Tech</option>
              <option>Alabama</option>
              <option>Clemson</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Info</Form.Label>
            <Form.Control
              name="contactInfo"
              type="text"
              value={addTicketState.contactInfo}
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
              value={addTicketState.addtionalDetails}
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
          Add Ticket
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTicketModal;
