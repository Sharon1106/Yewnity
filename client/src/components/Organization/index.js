import React from "react";
// import CardGroup from 'react-bootstrap/CardGroup'
// import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import "../../views/profile.css"
// import UCLAv from '../ProfileViewer/images/uclav.png'
// import LAC9 from '../ProfileViewer/images/Lac9.png'
// import HM from '../ProfileViewer/images/humane.png'
// import avatar from '../ProfileViewer/images/avatar.png'
// import { Row } from "../Profile";






export default function Organization(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                        </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.lastUpdated}</small>
            </Card.Footer>
        </Card>

    );
}