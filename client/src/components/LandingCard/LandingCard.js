import React from 'react';
import Card from 'react-bootstrap/Card';
import orgcard1 from '../../images/VolunteerMatch_official.png';
import orgcard2 from '../../images/international_hq.png';
import orgcard3 from '../../images/un_volunteer.png';
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
            <Card.Img variant="top" src={orgcard1} alt="Volunteer Match Logo" />
            <Card.Body>
              <Card.Title>Volunteer Match</Card.Title>
              <Card.Text>
              Remarkable Outcomes!
              VolunteerMatch matches inspired people with inspiring causes. 
              It's how volunteers and nonprofits connect to achieve remarkable outcomes. 
              Find opportunities at 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://www.volunteermatch.org/">Learn More!</a>
              </small>
            </Card.Footer>
          </Card>
          <Card className="card my-5 hoverable">
            <Card.Img variant="top" src={orgcard2} alt="International Volunteer Logo"/>
            <Card.Body>
              <Card.Title>International Volunteer HQ</Card.Title>
              <Card.Text>
              At International Volunteer HQ, we enable people from all walks 
              of life to make a difference on the adventure of a lifetime. Volunteering with 
              IVHQ is the most affordable and regenerative way to immerse yourself in new cultures 
              and give back through travel.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://www.volunteerhq.org/">Learn More!</a>
              </small>
            </Card.Footer>
          </Card>
          <Card className="card my-5 hoverable">
            <Card.Img variant="top" src={orgcard3} alt="UN Volunteer Logo" />
            <Card.Body>
              <Card.Title>UN Volunteers</Card.Title>
              <Card.Text>
              The United Nations Volunteers (UNV) programme contributes to peace 
              and development through volunteerism worldwide. We work with partners
               to integrate qualified, highly motivated and well supported UN Volunteers
                into development programming and promote the value and global 
                recognition of volunteerism.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="https://www.unv.org/">Learn More!</a>
                </small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </section >


  )
}

export default LandingCard;
