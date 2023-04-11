import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TextBook.css';
import '../MainTheme.css';
import BookBlock from './BookBlock.jsx';

const Bookshelf = () => {
  const books = [
    {
      author: 'Alex',
      title: 'The Art of Programming',
      seller: 'Books R Us',
      price: 29.99,
      condition: 'New',
      imageURL: 'https://m.media-amazon.com/images/I/61s6zH2bbIL._SX260_.jpg',
    },
    {
      author: 'Yushus',
      title: 'Data Science for Beginners',
      seller: 'Bookworms',
      price: 42.0,
      condition: 'Used',
      imageURL: 'https://m.media-amazon.com/images/I/61s6zH2bbIL._SX260_.jpg',
    },
    {
      author: 'Gee Pea Tee',
      title: 'Algorithms and Data Structures in Python',
      seller: 'Techie Books',
      price: 65.0,
      condition: 'New',
      imageURL: 'https://m.media-amazon.com/images/I/61s6zH2bbIL._SX260_.jpg',
    },
  ];
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {books.map((book, index) => (
        <div key={index} style={{ padding: '10px' }}>
          <BookBlock {...book} />
        </div>
      ))}
    </div>
  );
};

function TextBookPage() {
  /*
  const [textbooks, setTextbooks] = useState([]);

  const getTextbooks = async () => {
    const response = await fetch(
      'http://localhost:8080/api/tickets/getTextbooksAll'
    );
    const json = await response.json();
    setTextbooks(json);
  };

  useEffect(() => {
    getTextbooks();
  }, []);

  if (textbooks.length === 0) {
    return (
      <div style={{ paddingTop: 'var(--top-height)' }}>
        Loading Textbooks...
      </div>
    );
  }
*/
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
      {/*      <div className="textbook-list">
        <p> dynamic textbooks (if they exist)</p>
        {textbooks.map((textbook, index) => {
          return <Bookshelf {...textbook} key={index}></Bookshelf>;
        })}
      </div>
      */}
      <div>
        <Bookshelf></Bookshelf>
      </div>
    </div>
  );
}

export default TextBookPage;
