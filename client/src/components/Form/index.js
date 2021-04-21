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

//list item for social
export function SocialList(props) {
    return (
        <li className="social-list__item" {...props}>
        </li>
    )
}
//link for list item -- social
export function SocialLink(props) {
    return (
            <a className="social-list__link" href={props.url}>
                <i {...props}></i>
            </a>
    )
}
