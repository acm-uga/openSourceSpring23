import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';

function LoginPage() {
  return (
    <div className="main-container">
      <div className="inner-container">
        <div>
          <form method="POST">
            <label htmlFor="email">
              Email
              <br />
              <input
                type="text"
                name="email"
                placeholder="John.Doe@example.com"
              />
            </label>
            <br />
            <br />
            <label htmlFor="password">
              Password
              <br />
              <input type="password" name="password" />
            </label>
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
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
