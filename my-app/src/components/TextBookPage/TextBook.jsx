import { React } from 'react';
import { Link } from 'react-router-dom';
import './TextBook.css';
import '../MainTheme.css';
import './BookBlock.jsx';

/* eslint-disable */
function TextBookPage() {
  return (
    <div className="textbook-container">
      <div className="side-tab">
        <div className="side-list">
          {/* TODO: fix links/buttons */}
          <Link className="text-link">Price</Link>
          <Link className="text-link">Condition</Link>
        </div>
      </div>

      <div className="searchbar">
        <div className="search">
          <input type="text" placeholder="Search" id="search-input" />
          {/* <img id="search-img" src={search} alt="search" width="30vh" /> */}
        </div>
        <div className="search_dropdown">
          <select name="cars" id="cars">
            <option value="ISBN">ISBN</option>
            <option value="Title">Book Title</option>
            <option value="Version">Book Version</option>
            <option value="Author">Author Name</option>
          </select>
        </div>
      </div>

      <div className="row px-4">
        <div className="col-sm-3">
          <BookBlock
            author={'Bob Bobert'}
            title={'Data Structures & Algos in Java'}
            seller={'Yushus Komarlu'}
            price={57.0}
            condition={'New'}
            imageURL={
              'https://m.media-amazon.com/images/I/61s6zH2bbIL._SX260_.jpg'
            }></BookBlock>
        </div>

        <div className="col-sm-3">
          <BookBlock
            author={'Bob Bobert'}
            title={'Data Structures & Algos in Java'}
            seller={'Yushus Komarlu'}
            price={57.0}
            condition={'New'}
            imageURL={
              'https://m.media-amazon.com/images/I/61s6zH2bbIL._SX260_.jpg'
            }></BookBlock>
        </div>
      </div>
    </div>
  );
}

export default TextBookPage;
