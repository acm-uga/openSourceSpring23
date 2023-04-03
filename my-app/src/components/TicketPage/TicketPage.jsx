import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../MainTheme.css';

const TicketPage = () => {
  return (
    <div className="side-tab">
      <div className="side-list">
        {/* TODO: fix links/buttons */}
        <Link className="text-link">Price</Link>
        <Link className="text-link">Game</Link>
        <Link className="text-link">Home/Away</Link>
      </div>

      <div className=""></div>
    </div>
  );
};
