import { React } from 'react';
import './TextBook.css';

function BookBlock({ author, title, seller, price, condition, imageURL }) {
  return (
    <div className="bookblock" style={{ width: 12 + 'rem' }}>
      <img
        className="card-img-top"
        height={200}
        src={imageURL}
        alt="textbook"></img>
      <div className="card-body">
        <h6 className="card-title">Title: {title}</h6>
        <h6 className="card-subtitle">Author: {author}</h6>
        <br />
        <div className="col">
          <img
            className="profile-pic"
            src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
            width="100"
            height="100"
            alt="profile"></img>
        </div>
        <div>
          <p className="card-text">Username: {seller}</p>
        </div>
        <p className="card-text">Price: ${price}</p> <br />
        <p className="card-text">Condition: {condition}</p>
        <a href="localhost/placeholder" className="btn btn-primary">
          View
        </a>
      </div>
    </div>
  );
}
export default BookBlock;
