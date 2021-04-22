import React from "react";
//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms
export function Row(props) {
    return (
        <div className="row">
        {props.children}    
        </div>
    );
}

export function Name(props) {
    return (
        <div className="row">
        </div>
    );
}