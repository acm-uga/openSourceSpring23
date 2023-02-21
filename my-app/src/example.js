import React from 'react';
import './example.css';

function MyComponent({ title, text, onClick, buttonLabel }) {
  return (
    <div className="my-component">
      <h1 className="my-component__title">{title}</h1>
      <p className="my-component__text">{text}</p>
      <button type="button" className="my-component__button" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
}

export default MyComponent;
