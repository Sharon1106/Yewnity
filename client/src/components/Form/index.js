import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <input className="form-control" {...props} />
        </div>
    );
}