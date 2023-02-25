import React from 'react';

import './FAQPage.css';

// disable eslint for Links right now
/* eslint-disable */
function FAQPage() {
  return (
    <div className="main-container">
      <u>
        <h1>Frequently Asked Questions</h1>
      </u>
      <div className="qa-body">
        <div className="qa-container">
          <div className="question">
            <h2 className="q">Q:</h2>
            <p className="qText">
              How much wood could a woodchuck chuck if a woodchuck could chuck
              wood?
            </p>
          </div>
          <div className="answer">
            <h2 className="a">A:</h2>
            <p className="aText">13</p>
          </div>
        </div>
        <div className="qa-container">
          <div className="question">
            <h2 className="q">Q:</h2>
            <p className="qText">What is the meaning of life?</p>
          </div>
          <div className="answer">
            <h2 className="a">A:</h2>
            <p className="aText">Idk man I just wanted to make a website.</p>
          </div>
        </div>
        <div className="qa-container">
          <div className="question">
            <h2 className="q">Q:</h2>
            <p className="qText">Whats 9 + 10?</p>
          </div>
          <div className="answer">
            <h2 className="a">A:</h2>
            <p className="aText">21</p>
          </div>
        </div>
        insert more containers here
      </div>
    </div>
  );
}

export default FAQPage;
