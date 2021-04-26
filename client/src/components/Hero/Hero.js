import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import sliderone from '../../images/Yewnity.png';
import slidertwo from '../../images/donate.today.png';
import sliderthree from '../../images/recycle.png';
import SignUpLogin from "../Login/SignUpLogin";

function LandingHero() {
  return (
    <section id="hero">
      <div className="heroBlock">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderone} alt="First slide" />
            <Carousel.Caption>
              <h3 className="text-white">Join Our Community</h3>
              <SignUpLogin />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slidertwo} alt="Second slide" />
            <Carousel.Caption>
              <h3 className="text-white">Your contribution counts</h3>
              <SignUpLogin />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderthree} alt="Third slide" />
            <Carousel.Caption>
              <h3 className="text-white">YEWNITY</h3>
              <SignUpLogin />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default LandingHero;