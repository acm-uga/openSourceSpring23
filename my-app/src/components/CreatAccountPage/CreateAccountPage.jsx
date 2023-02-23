/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

function CreateAccountPage() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div className="main-container">
      <div className="inner-container">
        <form method="POST">
          <label htmlFor="firstname">
            First Name
            <br />
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={event => {
                setFirstName(event.target.value);
              }}
            />
          </label>
          <label htmlFor="lastname">
            Last Name
            <br />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={event => {
                setLastName(event.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <label htmlFor="email">
            Email
            <br />
            <input
              type="email"
              name="email"
              placeholder="HairyDawg@uga.edu"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <label htmlFor="number">
            Phone Number
            <br />
            <input
              type="email"
              name="email"
              placeholder="XXX-XXX-XXX"
              onChange={event => {
                setPhoneNumber(event.target.value);
              }}
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
              placeholder="password"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <label htmlFor="confirmpassword">
            Confirm Password
            <br />
            <input
              type="text"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={event => {
                setConfirmPassword(event.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
