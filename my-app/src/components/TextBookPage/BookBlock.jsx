import { React } from 'react';
import './TextBook.css';
function BookBlock({ author, title, seller, price, condition, imageURL }) {
  return (
    <div className="bookblock" style={{ width: 12 + 'rem' }}>
      <img
        className="card-img-top"
        height={200}
        src={imageURL}
        alt="Card image cap"></img>
      <div className="card-body">
        <h6 className="card-title">Title: {title}</h6>
        <h6 className="card-subtitle">Author: {author}</h6>
        <br />
        <div className="col">
          {/* <Router> 
    <Routes>
    <Route path="/Profile" element={<Profile />}> 
      <img className="profile-pic"
          src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
          width="100"
          height="100" />
    </Route>
    </Routes>
    </Router> */}
          <img
            className="profile-pic"
            src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png"
            width="100"
            height="100"></img>
        </div>
        <div>
          <p className="card-text">Username: {seller}</p>
        </div>
        <p className="card-text">Price: ${price}</p> <br />
        <p className="card-text">Condition: {condition}</p>
        <a href="#" className="btn btn-primary">
          View
        </a>
      </div>
    </div>
  );
}
export default BookBlock;
