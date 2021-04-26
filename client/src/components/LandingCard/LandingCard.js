import React from 'react';
import Card from 'react-bootstrap/Card';
import orgcard1 from '../../images/Dummy-logo-1.png';
import orgcard2 from '../../images/Dummy-logo-2.jpeg';
import orgcard3 from '../../images/Dummy-logo-3.jpeg';
import CardDeck from 'react-bootstrap/CardDeck';
import "./LandingCard.css";

function LandingCard() {
  return (
    <section id="cards" className="cards text-center my-5" >
      <div className="container my-5">
        <h1 className="my-5">OUR PARTNERS</h1>
        <br></br>
        <CardDeck>
          <Card className="card my-5 hoverable">
            <Card.Img variant="top" src={orgcard1} />
            <Card.Body>
              <Card.Title>ORG 1</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="card my-5 hoverable">
            <Card.Img variant="top" src={orgcard2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="card my-5 hoverable">
            <Card.Img variant="top" src={orgcard3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </section >


  )
}

export default LandingCard;
