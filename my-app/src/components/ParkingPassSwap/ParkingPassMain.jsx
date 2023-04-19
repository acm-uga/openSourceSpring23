import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Button, Select, Form } from 'react-bootstrap';
import ParkingPass from './ParkingPass';
import AddParkingPassModal from './AddParkingPassModal.jsx';
import './ParkingPassMain.css';
import ParkingPassDetailsModal from './ParkingPassDetailsModal';

const ParkingPassMain = () => {
  const [passes, setPasses] = useState([]);
  const [passesToShow, setPassesToShow] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterState, setFilterState] = useState({
    maxPrice: 999,
    lot: 'Any',
  });
  const [myPromise, setPromise] = useState();

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

  const onClearClick = () => {
    const originalState = {
      maxPrice: 999,
      lot: 'Any',
    };
    setFilterState(originalState);
  };

  // Another way to call the toast message
  function notifySuccess(text) {
    toast.success(text, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  useEffect(() => {
    console.log('useEffect running');
    // showToastMessage(); // reusable toast message
    setPromise(getPasses());
  }, []);

  useEffect(() => {
    setPassesToShow(filterPasses(filterState));
    if (passes.length == 0 && myPromise) {
      // For some reason, the toast message is called twice. I found out that it's b/c of React.Strictmode for the index.js file
      // Removing the wrapper component fixes the problem
      toast.promise(
        myPromise,
        {
          pending: 'Retrieving Data',
          success: 'Data Successfully Displayed',
          error: 'Error when fetching data. Turn on Backend',
        },
        {
          style: {
            minWidth: '380px',
          },
          success: {
            duration: 5000,
          },
        }
      );
    }
  }, [passes, myPromise]);

  const handleAddPass = newPass => {
    setPasses([...passes, newPass]);
    notifySuccess('The Parking Pass was added successfully!');
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className="side-tab-container"
            xs={2}
            style={{ marginTop: '150px' }}>
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
          <Col
            className="parking-pass-list-container"
            xs={10}
            style={{ marginTop: '150px' }}>
            <Row
              className="parking-pass-list"
              style={{
                justifyContent: 'space-around',
              }}>
              {passesToShow.map(pass => {
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ParkingPassMain;
