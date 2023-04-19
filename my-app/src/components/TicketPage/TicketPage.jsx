import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Button, Select, Form } from 'react-bootstrap';

import Ticket from './Ticket';
import AddTicketModal from './AddTicketModal';
import './TicketPage.css';

const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketsToShow, setTicketsToShow] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterState, setFilterState] = useState({
    maxPrice: 999,
    team: 'Any',
  });
  const [myPromise, setPromise] = useState();

  const handleChange = event => {
    const { name, value } = event.target;
    setFilterState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterTickets = filterState => {
    const filtered = tickets.filter(ticket => {
      const priceFilter = ticket.price <= filterState.maxPrice;
      const teamFilter =
        filterState.team === 'Any' || ticket.team === filterState.team;
      return priceFilter && teamFilter;
    });

    console.log(filtered);
    return filtered;
  };

  const onFilterClick = () => {
    console.log('click');
    setTicketsToShow(filterTickets(filterState));
  };

  const onClearClick = () => {
    const originalState = {
      maxPrice: 999,
      team: 'Any',
    };
    setFilterState(originalState);
  };

  const getPasses = async () => {
    const response = await fetch(
      'http://localhost:8080/api/tickets/getTicketsAll'
    );
    const json = await response.json();
    console.log(json);
    setTickets(json);
    setTicketsToShow(json);
  };

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
    setPromise(getPasses());
  }, []);

  useEffect(() => {
    setTicketsToShow(filterTickets(filterState));
    if (tickets.length == 0 && myPromise) {
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
  }, [tickets, myPromise]);

  const handleAddTicket = newTicket => {
    setTickets([...tickets, newTicket]);
    notifySuccess('The Ticket has been added successfully!');
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
              Add Ticket
            </Button>
            <Form.Label
              style={{
                marginTop: '10%',
                color: 'white',
              }}>
              Team
            </Form.Label>
            <Form.Select
              onChange={handleChange}
              value={filterState.lot}
              style={{}}
              name="lot">
              <option>Any</option>
              <option>Florida</option>
              <option>Georgia Tech</option>
              <option>Alabama</option>
              <option>Clemson</option>
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
              {ticketsToShow.map(ticket => {
                return <Ticket {...ticket} key={ticket.id} />;
              })}
            </Row>
          </Col>
        </Row>
        <AddTicketModal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          onSubmit={handleAddTicket}
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

export default TicketPage;
