// TicketPage.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Select, Form } from 'react-bootstrap';

import ParkingPass from './ParkingPass';
import AddParkingPassModal from './AddParkingPassModal.jsx';
import './ParkingPassMain.css';

const ParkingPassMain = () => {
  const [passes, setPasses] = useState([]);
  const [passesToShow, setPassesToShow] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterState, setFilterState] = useState({
    maxPrice: Infinity,
    lot: 'Any',
  });

  const getPasses = async () => {
    const response = await fetch(
      'http://localhost:8080/api/parking/getParkingPassAll'
    );
    const json = await response.json();
    setPasses(json);
    setPassesToShow(json);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFilterState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterPasses = filterState => {
    console.log(filterState);
    return passes.filter(pass => {
      const priceFilter = pass.price <= filterState.maxPrice;
      const lotFilter =
        filterState.lot === 'Any' || pass.lot === filterState.lot;
      return priceFilter && lotFilter;
    });
  };

  const onFilterClick = () => {
    setPassesToShow(filterPasses(filterState));
  };

  const onClearClick = async () => {
    const originalState = {
      maxPrice: Infinity,
      lot: 'Any',
    };
    setFilterState(originalState);
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
          <Button
            onClick={() => setShowAddModal(true)}
            style={{
              width: '100%',
            }}>
            Add Parking Pass
          </Button>
          <Form.Label
            style={{
              marginTop: '10%',
              color: 'white',
            }}>
            Lot
          </Form.Label>
          <Form.Select
            onChange={handleChange}
            value={filterState.lot}
            style={{}}
            name="lot">
            <option>Any</option>
            <option>North Deck</option>
            <option>South Deck</option>
            <option>East Deck</option>
            <option>STEM Deck</option>
          </Form.Select>
          <Form.Label
            style={{
              color: 'white',
              marginTop: '10%',
            }}>
            Max Price ($)
          </Form.Label>
          <Form.Control
            type="number"
            name="maxPrice"
            onChange={handleChange}
            value={filterState.maxPrice}
          />
          <Row
            style={{
              width: '100%',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: '10%',
            }}>
            <Col>
              <Button
                style={{
                  marginTop: '10%',
                  width: '100%',
                }}
                onClick={onFilterClick}>
                Filter
              </Button>
            </Col>
            <Col>
              <Button
                style={{
                  width: '100%',
                  marginTop: '10%',
                }}
                onClick={onClearClick}>
                Clear
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="parking-pass-list-container" xs={10}>
          <Row
            className="parking-pass-list"
            style={{
              justifyContent: 'space-around',
            }}>
            {passesToShow.map((pass, index) => {
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
