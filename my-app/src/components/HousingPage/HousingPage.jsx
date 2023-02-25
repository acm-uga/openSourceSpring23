import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import './HousingPage.css';
import '../MainTheme.css';

// TODO: add functionality to buttons
// disable eslint for now
/* eslint-disable */
function HousingPage() {

  const [housingFilterTab, setHousing] = useState("false");
  const [roommatesFilterTab, setRoommates] = useState("false");
  const [locationFilterTab, setLocation] = useState("false");
  const [priceFilterTab, setPrice] = useState("false");
  const [amenitiesFilterTab, setAmenities] = useState("false");
  const [bedroomsFilterTab, setBedrooms] = useState("false");
  const [bathroomsFilterTab, setBathrooms] = useState("false");
  const ToggleHousing = () => {
    ToggleAll();
    setHousing(!housingFilterTab); 
  };
  const ToggleRoommates = () => {
    ToggleAll();
    setRoommates(!roommatesFilterTab); 
  };
  const ToggleLocation = () => {
    ToggleAll();
    setLocation(!locationFilterTab); 
  };
  const TogglePrice = () => {
    ToggleAll();
    setPrice(!priceFilterTab); 
  };
  const ToggleAmenities = () => {
    ToggleAll();
    setAmenities(!amenitiesFilterTab); 
  };
  const ToggleBedrooms = () => {
    ToggleAll();
    setBedrooms(!bedroomsFilterTab); 
  };
  const ToggleBathrooms = () => {
    ToggleAll();
    setBathrooms(!bathroomsFilterTab); 
  };
  const ToggleAll = () => {
    if (!housingFilterTab) {
      setHousing(!housingFilterTab);
    }
    if (!roommatesFilterTab) {
      setRoommates(!roommatesFilterTab);
    }
    if (!locationFilterTab) {
      setLocation(!locationFilterTab);
    }
    if (!priceFilterTab) {
      setPrice(!priceFilterTab);
    }
    if (!amenitiesFilterTab) {
      setAmenities(!amenitiesFilterTab);
    }
    if (!bedroomsFilterTab) {
      setBedrooms(!bedroomsFilterTab);
    }
    if (!bathroomsFilterTab) {
      setBathrooms(!bathroomsFilterTab);
    }
  }

  return (
    <div className="main-container">

      <div className={housingFilterTab ? "hide popup" : "show popup"}>Housing filters</div>
      <div className={roommatesFilterTab ? "hide popup" : "show popup"}>Roommates filters</div>
      <div className={locationFilterTab ? "hide popup" : "show popup"}>Location filters</div>
      <div className={priceFilterTab ? "hide popup" : "show popup"}>Price filters</div>
      <div className={amenitiesFilterTab ? "hide popup" : "show popup"}>Amenities filters</div>
      <div className={bedroomsFilterTab ? "hide popup" : "show popup"}>Bedrooms filters</div>
      <div className={bathroomsFilterTab ? "hide popup" : "show popup"}>Bathrooms filters</div>

      <button type="button" className="previous">
        Prev
      </button>

      <div className="page-num">1</div>

      <button type="button" className="next">
        Next
      </button>

      <div className="side-tab">
        <div className="side-list">
          <h4 style={{textDecorationLine: "underline"}}>Filters</h4>
          <button className="filter-button" type="button" onClick={ToggleHousing}>Housing Type</button>
          <button className="filter-button" type="button" onClick={ToggleRoommates}>Roommates</button>
          <button className="filter-button" type="button" onClick={ToggleLocation}>Location</button>
          <button className="filter-button" type="button" onClick={TogglePrice}>Price</button>
          <button className="filter-button" type="button" onClick={ToggleAmenities}>Amenities</button>
          <button className="filter-button" type="button" onClick={ToggleBedrooms}>Bedrooms</button>
          <button className="filter-button" type="button" onClick={ToggleBathrooms}>Bathrooms</button>
        </div>
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
          <p className="post-title"> Townhome</p>
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
          <p className="post-title"> Apartments</p>
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
          <p className="post-title"> Studio Apartment</p>
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
          <p className="post-title"> House </p>
          <p className="description">
            3 bedrooms, 3 bathrooms
            <br />
            Looking for: 1 male
            <br />
            Spot Secured? yes
            <br />
            Time Left: 4 weeks
          </p>
          <button type="submit" className="view-post-button">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default HousingPage;
