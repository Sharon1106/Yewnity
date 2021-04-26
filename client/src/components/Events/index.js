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

//this is our events card that gets created when the call events function is called to grab all events
export function Card(props) {
    return (
        <CardWrapper className="card">
            <div className="card-body">
                <div className="row-format">
                    <P className="label-title"><Label className="label">Event Name:</Label> {props.title}</P>
                    <P id="descript">{props.description}</P>
                </div>
                <div className="row-format">
                    <P className="moment"><Label className="label">Date:</Label> {props.moment}</P>
                    <P className="city"><Label className="label">Location:</Label> {props.city}</P>
                    <P className="city"><Label className="label">User:</Label> {props.user}</P>
                </div>
            </div>
        </CardWrapper>
    )
}