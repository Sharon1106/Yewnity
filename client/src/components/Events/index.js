import React from "react";
//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms
export function Input(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input className="form-control" {...props} />
        </div>
    );
}

export function DateTime(props) {
    return (
        <div className="form-group">
            <label className="col-form-label">{props.label}</label>
            <input className="form-control" type="datetime-local" value="2021-04-21T13:45:00"></input>
        </div>
    )
}

