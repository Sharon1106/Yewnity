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
        <CardWrapper className="card">
            <div className="card-body">
                <Label className="label text-muted">Event:</Label>
                    <P className="label-title">{props.title}</P>
                <Label className="label-description text-muted">Event Description:</Label>
                    <P id="descript">{props.description}</P>
                <div className="row-format">
                    <Label className="label text-muted">When: </Label>
                    <P className="moment">{props.moment}</P>
                </div>
                <div className="row-format">
                    <Label className="label text-muted">Location:</Label>
                    <P className="city">{props.city}</P>
                </div>
                <Label className="label-user text-muted">User: {props.user}</Label>
            </div>
        </CardWrapper>
    )
}