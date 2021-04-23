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
            <input className="form-control" type="datetime-local" {...props}></input>
        </div>
    )
}

export function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.moment}</p>
                <p className="card-text">{props.city}</p>
            </div>
        </div>
    )
}