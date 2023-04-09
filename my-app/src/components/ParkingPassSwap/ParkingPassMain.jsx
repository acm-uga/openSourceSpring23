// TicketPage.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ParkingPass from './ParkingPass';
import AddParkingPassModal from './AddParkingPassModal.jsx';
import './ParkingPassMain.css';

const ParkingPassMain = () => {
  const [passes, setPasses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const getPasses = async () => {
    const response = await fetch(
      'http://localhost:8080/api/parking/getParkingPassAll'
    );
    const json = await response.json();
    setPasses(json);
  };

  useEffect(() => {
    getPasses();
  }, []);

  if (passes.length === 0) {
    return <div>Loading Parking Passes...</div>;
  }

  const handleAddPass = newPass => {
    setPasses([...passes, newPass]);
  };

  return (
    <Container fluid className="parking-pass-container">
      <Row>
        <Col>
          <Col md={2} className="side-tab">
            <Button
              className="add-pass-btn"
              onClick={() => setShowAddModal(true)}>
              Add Parking Pass
            </Button>
          </Col>
        </Col>
        <Col md={10}>
          <Row className="parking-pass-list">
            {passes.map((pass, index) => {
              return <ParkingPass {...pass} key={index} />;
            })}
          </Row>
        </Col>
      </Row>
      <AddParkingPassModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onSubmit={handleAddPass}
      />
    </Container>
  );
};

export default ParkingPassMain;
