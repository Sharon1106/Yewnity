import React from "react";

//this is an input component that can be used on forms
export function Row(props) {
    return (
        <div className="row">
        {props.children}    
        </div>
    );
}

export function Name() {
    return (
        <div className="row">
        </div>
    );
}
