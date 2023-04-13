import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './TextBook.css';

function TextBookModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Yushus Komarlu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="activityTable">
          <tr>
            <th>Date</th>
            <th>Account Name</th>
            <th>User Rating</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>09/14/2022</td>
            <td>Daniel Grigsby</td>
            <td>5 Stars</td>
            <td>Pristine Condition | Reasonable Price</td>
          </tr>
          <tr>
            <td>11/13/2022</td>
            <td>Peter Stone</td>
            <td>3.5 Stars</td>
            <td>Horrible communicator.</td>
          </tr>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TextBookModal;
