import React from 'react';

import './FeedbackPage.css';
import '../MainTheme.css';

/* UGA Marketplace Feedback Form link */
const FormLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSfJkjB6IcYv5ibrBpqzTXmWD3etrhj9NNrRz8mt1vgaxvwQmg/viewform?usp=sf_link';

// Disbable eslint temporarily
/* eslint-disable */
function FeedbackPage() {
  function GotoForm() {
    window.location.href = FormLink;
  }

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
        <button onClick={GotoForm} type="button" className="form-button">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default FeedbackPage;
