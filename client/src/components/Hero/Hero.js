import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import  Button  from '../Button/Button'
import sliderone from '../../images/Volunteer-1.jpeg'

// google, login, signup
function LandingHero() {
    return (
        <div className ="heroBlock">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ sliderone }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      {/* //NEED onclick  */}
      <Button> Sign Up </Button>
      {/* //onclick  */}
      <Button> Log In </Button>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/volunteer-accepts-canned-food-donation-at-food-drive-picture-id621904294?s=612x612"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://previews.123rf.com/images/kasto/kasto1509/kasto150900240/46290859-speakers-giving-a-talk-at-business-meeting-audience-in-the-conference-hall-business-and-entrepreneur.jpg"
      alt="Third slide"
    />

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