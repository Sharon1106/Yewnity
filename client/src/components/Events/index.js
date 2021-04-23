import React from "react";
import { CardWrapper, FormGroup, Label, P } from "../Form";
import './style.css';
//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms
export function Input(props) {
    return (
        <FormGroup>
            <Label>{props.label}</Label>
            <input className="form-control" {...props} />
        </FormGroup>
    );
}

export function DateTime(props) {
    return (
        <FormGroup>
            <Label className="col-form-label">{props.label}</Label>
            <input className="form-control" type="datetime-local" {...props}></input>
        </FormGroup>
    )
}

export function Card(props) {
    return (
        <CardWrapper>
            <div className="card-body">
                <h5 className="card-title"><Label className="label-title">Title:</Label>{props.title}</h5>
                <Label className="label-description">Description:</Label>
                <P id="descript">{props.description}</P>
                <Label className="label">Date and Time:</Label>
                <P id="moment">{props.moment}</P>
                <Label className="label">Location:</Label>
                <P id="city">{props.city}</P>
            </div>
        </CardWrapper>
    )
}