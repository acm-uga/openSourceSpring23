import React from 'react';

import './FeedbackPage.css';
import '../MainTheme.css';

// disable eslint for now
/* eslint-disable */
function FeedbackPage() {
  return (
    <div className="main-container-feedback">
      <b>
        <h1>UGA Marketplace Feedback Form</h1>
      </b>
      <div className="feedback-body">
        <div className="feedback-text">
          Have feedback for UGA Marketplace?<p></p>Whether you are a student or
          faculty member, your feedback is valuable and will be strongly
          considered as the website continues to grow.
        </div>
        <button type="button" className="form-button">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default FeedbackPage;
