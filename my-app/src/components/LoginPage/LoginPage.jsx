import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../firebase.js';

import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
    logInWithEmailAndPassword(email, setPassword);
  };

  return (
    <div className="main-container">
      <div className="inner-container">
        <div>
          <label htmlFor="email">
            Email
            <br />
            <input
              type="text"
              name="email"
              placeholder="sbennett13657@uga.edu"
              onChange={event => setEmail(event.target.value)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="password">
            Password
            <br />
            <input
              type="password"
              name="password"
              onChange={event => setPassword(event.target.value)}
            />
          </label>
          <br />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          <div className="forgot-pass-container">
            <a
              href="https://en.wikipedia.org/wiki/Help:Reset_password"
              target="_blank"
              rel="noreferrer"
              className="forgot-pass-link">
              Forgot Password
            </a>
            <br />
            <Link to="/register" className="create-account-link">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
