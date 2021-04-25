import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import sliderone from '../../images/Neighborhood-home-people-social-network.jpg';
import slidertwo from '../../images/Volunteer-2.jpeg';
import sliderthree from '../../images/Community-Event.jpeg';
import SignUpLogin from "../Login/SignUpLogin";

function LandingHero() {
  return (
    <section id="hero">
      <div id className="heroBlock">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderone} alt="First slide" />
            <Carousel.Caption>
              <h3>Join Our Community</h3>

              {/* user registration */}
              <SignUpLogin />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slidertwo} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <SignUpLogin />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderthree} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <SignUpLogin />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default LandingHero;