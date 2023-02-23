import React, { useState } from 'react';

import './CreateAccountPage.css';
const CreateAccountPage = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  const emailRegex = '^[A-Za-z0-9._%+-]+@uga.com$';

  const numberRegex =
    '/^(?:(?:(?(?:00|+)([1-4]dd|[1-9]d+))?)[-. \\/]?)?((?:(?d{1,})?[-. \\/]?)+)(?:[-. \\/]?(?:#|ext.?|extension|x)[-. \\/]?(d+))?$/i';

  const validCreation = () => {
    if (!checkPasswords()) {
      alert('Passwords need to be the same');
    }

    if (!checkEmail()) {
      alert('Email must end with uga.edu');
    }

    if (!checkNumber()) {
      alert(
        'Phone Number must be in the form XXX-XXX-XXXX, XXXXXXXXX, or (XXX)-XXX-XXXX'
      );
    }

    return true;
  };

  const checkPasswords = () => {
    return password === confirm;
  };
  const checkEmail = () => {
    return emailRegex.test(email);
  };
  const checkNumber = () => {
    return numberRegex.test(number);
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
            onChange={event => setEmail(event.target.value)}
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
