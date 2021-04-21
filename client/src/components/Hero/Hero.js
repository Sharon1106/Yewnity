import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import sliderone from '../../images/Volunteer-1.jpeg';
import slidertwo from '../../images/Volunteer-2.jpeg';
import sliderthree from '../../images/Community-Event.jpeg';
import SignUpLogin from "../Login/SignUpLogin";

// google, login, signup
function LandingHero() {
    return (    
    <div  iv className ="heroBlock">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={ sliderone } alt="First slide"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            {/* user registration */}
            <SignUpLogin/>
          </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ slidertwo } alt="Second slide"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ sliderthree } alt="Third slide"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LandingHero;