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
    <Container fluid>
      <Row>
        <Col className="side-tab-container" xs={2}>
          <Button onClick={() => setShowAddModal(true)}>
            Add Parking Pass
          </Button>
        </Col>
        <Col className="parking-pass-list-container" xs={10}>
          <Row className="parking-pass-list">
            {passes.map((pass, index) => {
              return <ParkingPass {...pass} key={pass.id} />;
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
