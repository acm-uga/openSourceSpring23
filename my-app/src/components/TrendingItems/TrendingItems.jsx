import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TrendingItems.css';

function TrendingItems() {
  return (
    <div className="trending-items">
      <br />
      <div className="trending-items-row">
        <Card style={{ width: '22rem' }}>
          <Card.Img
            variant="top"
            height={250}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6Srw0WC0k6FwQwIj6xGofodscu8McMae-OblDlMQzxlnEoA-SwjuPea6U-BmEfGDkRg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title> Selling my Couch </Card.Title>
            <p>
              Hey, I&apos;m selling my couch since I don&apos;t need it anymore!
              Looking for around $50.
            </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img
            variant="top"
            height={250}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHvGcSqn4rs8Lciw4ZiBTJCNPB8Rmj6cEg9cPKD8_CVmKkLfpR2SYLku0mMBAPvB92I4&usqp=CAU"
          />
          <Card.Body>
            <Card.Title> Free Burgers </Card.Title>
            <p> Come by and get Free Burgers at our Table until 2pm! </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img
            variant="top"
            height={250}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfxxzaqGxdDrMjb4KVp9mkZDpj03zpwWgpg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title> Swap STAT 2000 for MATH 3300 </Card.Title>
            <p>
              Hey, I really need to switch these courses, does anyone take MATH
              3300?
            </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div className="trending-items-row">
        <Card style={{ width: '22rem' }}>
          <Card.Img
            variant="top"
            height={250}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPFJmsRK0ErT6B63G18DRNy128bQPQQhH1XQhX-rJ3c98SbYPUYSuwCVx_xzLuyvBBwU&usqp=CAU"
          />
          <Card.Body>
            <Card.Title> Need CSCI 1301 Textbook </Card.Title>
            <p> Hey, I need this textbook for my class, ISBN 2348398234 </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img
            variant="top"
            height={250}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3lanUqUzzVotPTsv4mck0j6VkxSXi3HFjw&usqp=CAU"
          />
          <Card.Body>
            <Card.Title> Brumby Rating </Card.Title>
            <p> Ratings for Brumby Hall! Currently: 4.3 stars </p>
            <Button variant="primary"> View More </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img
            variant="top"
            height={250}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnR7UE8X_iaHRBvS237N6DKIeJP6nN_G5pJA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title> Giving away my refrigerator </Card.Title>
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
