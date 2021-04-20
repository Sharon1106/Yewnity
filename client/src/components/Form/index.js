import React from "react";
//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms
export function Input(props) {
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <input className="form-control" {...props} />
        </div>
    );
}

//this is a buttun to use for submitting forms
export function SubmitBtn(props) {
    return (
        <button {...props}>{props.name}</button>
    )
}