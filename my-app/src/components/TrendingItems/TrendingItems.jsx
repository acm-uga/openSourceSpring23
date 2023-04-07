import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './TrendingItems.css';
import '../MainTheme.css';

function TrendingItems() {
  return (
    <div id="trending-items">
      <div className="side-tab">
        <div className="side-list">
          <h4 style={{ textDecorationLine: 'underline' }}>Info</h4>
          {/* TODO: fix links/buttons */}
          <Link className="text-link">Textbooks</Link>
          <Link className="text-link">Course Swap</Link>
          <Link className="text-link">Student Housing</Link>
        </div>
      </div>
      <div className="trending-items-grid">
        <Card style = {{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6Srw0WC0k6FwQwIj6xGofodscu8McMae-OblDlMQzxlnEoA-SwjuPea6U-BmEfGDkRg&usqp=CAU)"}}>
        <Card.Title> Selling my Couch </Card.Title>
          <Card.Body>
            <p>
              Hey, I&apos;m selling my couch since I don&apos;t need it anymore!
              Looking for around $50.
            </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style = {{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHvGcSqn4rs8Lciw4ZiBTJCNPB8Rmj6cEg9cPKD8_CVmKkLfpR2SYLku0mMBAPvB92I4&usqp=CAU)"}}>
        <Card.Title> Free Burgers </Card.Title>
          <Card.Body>
            <p> Come by and get Free Burgers at our Table until 2pm! </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style = {{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfxxzaqGxdDrMjb4KVp9mkZDpj03zpwWgpg&usqp=CAU)"}}>
        <Card.Title> Swap STAT 2000 for MATH 3300 </Card.Title>
          <Card.Body>
            <p>
              Hey, I really need to switch these courses, does anyone take MATH
              3300?
            </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style = {{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPFJmsRK0ErT6B63G18DRNy128bQPQQhH1XQhX-rJ3c98SbYPUYSuwCVx_xzLuyvBBwU&usqp=CAU)"}}>
        <Card.Title> Need CSCI 1301 Textbook </Card.Title>
          <Card.Body>
            <p> Hey, I need this textbook for my class, ISBN 2348398234 </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style = {{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3lanUqUzzVotPTsv4mck0j6VkxSXi3HFjw&usqp=CAU)"}}>
        <Card.Title> Brumby Rating </Card.Title>
          <Card.Body>
            <p> Ratings for Brumby Hall! Currently: 4.3 stars </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style = {{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnR7UE8X_iaHRBvS237N6DKIeJP6nN_G5pJA&usqp=CAU)"}}>
        <Card.Title> Giving away my refrigerator </Card.Title>
          <Card.Body>
            <p>
              If you can move this fridge, you can keep it. Please come get it!
            </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TrendingItems;
