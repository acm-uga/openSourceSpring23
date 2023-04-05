import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../MainTheme.css';

import Ticket from './Ticket';

const TicketPage = () => {
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    const response = await fetch(
      'http://localhost:8080/api/tickets/getTicketsAll'
    );
    const json = await response.json();
    setTickets(json);
  };

  useEffect(() => {
    getTickets();
  }, []);

  if (tickets.length === 0) {
    return <div>Loading Tickets...</div>;
  }

  return (
    <div className="side-tab">
      <div className="side-list">
        {/* TODO: fix links/buttons */}
        <Link className="text-link">Price</Link>
        <Link className="text-link">Game</Link>
        <Link className="text-link">Home/Away</Link>
      </div>

      <div className="ticket-list">
        {tickets.map((ticket, index) => {
          return <Ticket {...ticket} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TicketPage;
