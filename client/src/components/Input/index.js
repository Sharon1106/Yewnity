import React from "react";
import { FormGroup, Label } from "../Form";

//this is an input component that can be used on forms
export function Input(props) {
    return (
        <FormGroup>
            <Label>{props.label}</Label>
            <input className="form-control" {...props} />
        </FormGroup>
    );
}