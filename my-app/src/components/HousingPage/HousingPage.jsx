import React from 'react';
import { Link } from 'react-router-dom';

import './HousingPage.css';

// TODO: add functionality to buttons
// disable eslint for now
/* eslint-disable */
function HousingPage() {
  return (
    <div className="main-container">
      <button type="button" className="previous">
        Prev
      </button>

      <div className="page-num">1</div>

      <button type="button" className="next">
        Next
      </button>

      <div className="filters-tab">
        <h4 style={{ textDecorationLine: 'underline' }}>Filters</h4>
        <Link>Housing Type</Link>
        <Link>Roommates</Link>
        <Link>Location</Link>
        <Link>Price</Link>
        <Link>Amenities</Link>
        <Link>Bedrooms</Link>
        <Link>Bathrooms</Link>
      </div>

      <div className="posts-container">
        <div className="post">
          <p className="post-title">Riverclub Apartments</p>
          <p className="description">
            4 bedrooms, 2 bathrooms
            <br />
            Looking for: 2 males
            <br />
            Spot Secured? yes
            <br />
            Time Left: 3 days
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">Example Apartments</p>
          <p className="description">
            2 bedrooms, 2 bathrooms
            <br />
            Looking for: 1 female
            <br />
            Spot Secured? yes
            <br />
            Time Left: 2 weeks
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">House on S Milledge Avenue</p>
          <p className="description">
            6 bedrooms, 4 bathrooms
            <br />
            Looking for: 2 people
            <br />
            Spot Secured? no
            <br />
            Time Left: 1 day
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">Towneclub Condominums</p>
          <p className="description">
            4 bedrooms, 2 bathroom
            <br />
            Looking for: 1 male
            <br />
            Spot Secured? yes
            <br />
            Time Left: 12 hours
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">Downtown Apartment</p>
          <p className="description">
            4 bedrooms, 2 bathrooms
            <br />
            Looking for: 1 person
            <br />
            Spot Secured? yes
            <br />
            Time Left: 1 month
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">Downtown Apartment</p>
          <p className="description">
            4 bedrooms, 2 bathrooms
            <br />
            Looking for: 3 people
            <br />
            Spot Secured? no
            <br />
            Time Left: 5 weeks
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">___ Townhome</p>
          <p className="description">
            4 bedrooms, 2 bathrooms
            <br />
            Looking for: 2 males
            <br />
            Spot Secured? yes
            <br />
            Time Left: 3 days
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">___ Apartments</p>
          <p className="description">
            4 bedrooms, 2 bathrooms
            <br />
            Looking for: 2 males
            <br />
            Spot Secured? yes
            <br />
            Time Left: 3 days
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title">___ Studio Apartment</p>
          <p className="description">
            4 bedrooms, 2 bathrooms
            <br />
            Looking for: 2 males
            <br />
            Spot Secured? yes
            <br />
            Time Left: 3 days
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>

        <div className="post">
          <p className="post-title" />
          <p className="description">
            <br />

            <br />

            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HousingPage;
