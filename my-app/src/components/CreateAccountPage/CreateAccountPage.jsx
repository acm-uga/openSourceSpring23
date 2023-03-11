import React, { useState } from 'react';

import './CreateAccountPage.css';
const CreateAccountPage = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  const emailRegex = '^[A-Za-z0-9._%+-]+@uga.edu$';

  const numberRegex =
    '/^(?:(?:(?(?:00|+)([1-4]dd|[1-9]d+))?)[-. \\/]?)?((?:(?d{1,})?[-. \\/]?)+)(?:[-. \\/]?(?:#|ext.?|extension|x)[-. \\/]?(d+))?$/i';

  const validCreation = () => {
    try {
      checkPasswords();
      checkEmail();
      checkNumber();
    } catch (error) {
      alert(error.message);
      return false;
    }
    return true;
  };

  const checkPasswords = () => {
    if (password === confirm) {
      return true;
    }
    throw new Error('Passwords must match');
  };

  const checkEmail = () => {
    if (emailRegex.test(email)) {
      return true;
    }
    throw new Error('Email must end with @uga.edu');
  };
  const checkNumber = () => {
    if (numberRegex.test(number)) {
      return true;
    }
    throw new Error(
      'Phone number must be in the format XXX-XXX-XXXX or XXXXXXXXXX'
    );
  };

  return (
    <div className="container">
      <form>
        <label htmlFor="firstname">
          First Name
          <br />
          <input
            type="text"
            name="firstname"
            placeholder="Jere"
            onChange={event => setFirstName(event.target.value)}
          />
        </label>
        <label htmlFor="lastname">
          Last Name
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="Moorehead"
            onChange={event => setLastName(event.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input
            type="email"
            name="email"
            placeholder="hairdawg@uga.edu"
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="number">
          Phone Number
          <br />
          <input
            type="text"
            name="number"
            placeholder="XXX-XXX-XXXX"
            onChange={event => setNumber(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input
            type="password"
            name="password"
            placeholder="••••••••••"
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <label htmlFor="confirm">
          Confirm Password
          <br />
          <input
            type="password"
            name="confirm"
            placeholder="••••••••••"
            onChange={event => setConfirm(event.target.value)}
          />
        </label>
        <br />
        <button className="create-account" onClick={validCreation}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
