import React from "react";
//------------------------anything inside of a form, create the component here!--------------------------//

// A Wrapper component for cards
export function CardWrapper(props) {
    return(
        <div className="card" {...props}></div>
    )
}

export function Form(props) {
    return (
        <form {...props}></form>
    )
}

//groups form elements
export function FormGroup(props) {
    return (
        <div className="form-group" {...props}></div>
    )
}
//this is an input component that can be used on forms
export function Input(props) {
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <input className="form-control" {...props} />
        </div>
    );
}

//large input areas
export function LargeInput(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <textarea className="form-control" rows="3" {...props}></textarea>
        </div>
    )
}

//simple label component for forms
export function Label(props) {
    return (
        <label {...props}></label>
    )
}

//simple paragraph for forms and cards
export function P(props) {
    return (
        <p className="card-text" {...props}></p>
    )
}

export function Button(props) {
    return (
        <button type="button" className="btn btn-outline-dark">{props.label}</button>
    )
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
