import React from "react";
import Card from 'react-bootstrap/Card';
import "../../views/profile.css";

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
};