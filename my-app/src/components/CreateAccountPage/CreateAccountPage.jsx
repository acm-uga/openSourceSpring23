import React, { useState } from 'react';

import './CreateAccountPage.css';
const CreateAccountPage = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  return (
    <div className="container">
      <form>
        <label htmlFor="firstname">
          First Name
          <br />
          <input type="text" name="firstname" placeholder="Jere" />
        </label>
        <label htmlFor="lastname">
          Last Name
          <br />
          <input type="text" name="lastname" placeholder="Moorehead" />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input type="email" name="email" placeholder="hairdawg@uga.edu" />
        </label>
        <label htmlFor="number">
          Phone Number
          <br />
          <input type="text" name="number" placeholder="XXX-XXX-XXXX" />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input type="password" name="password" placeholder="••••••••••" />
        </label>
        <label htmlFor="confirm">
          Confirm Password
          <br />
          <input type="password" name="confirm" placeholder="••••••••••" />
        </label>
        <br />
        <button className="create-account">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
