import React, { useEffect, useState } from 'react';
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
    return filtered;
  };

  const onFilterClick = () => {
    setTicketsToShow(filterTickets(filterState));
  };

  const onClearClick = () => {
    const originalState = {
      maxPrice: 999,
      team: 'Any',
    };
    setFilterState(originalState);
  };

  const getTickets = async () => {
    const response = await fetch('http://localhost:8080/api/tickets/getAll');
    const json = await response.json();
    setTickets(json);
    setTicketsToShow(json);
  };

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    setTicketsToShow(filterTickets(filterState));
  }, [tickets]);

  const handleAddTicket = newTicket => {
    setTickets([...tickets, newTicket]);
  };

  return (
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
            name="team">
            <option>Any</option>
            <option>UT Martin</option>
            <option>Ball State</option>
            <option>South Carolina</option>
            <option>UAB</option>
            <option>Auburn</option>
            <option>Kentucky</option>
            <option>Vanderbilt</option>
            <option>Florida</option>
            <option>Missouri</option>
            <option>Ole Miss</option>
            <option>Tennessee</option>
            <option>Georgia Tech</option>
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
  );
};

export default TicketPage;
