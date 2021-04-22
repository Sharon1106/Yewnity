import React from "react";
//------------------------anything inside of a form, create the component here!--------------------------//

export function Form() {
    return (
        <form className="form-outline mb-4 shadow-5-strong">
        </form>
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

export function LargeInput(props) {
    return (
        <div class="form-group">
            <label>{props.label}</label>
            <textarea class="form-control" rows="3" placeholder={props.placeholder}></textarea>
        </div>
    )
}

export function Label(props) {
    return (
        <label {...props}></label>
    )
}

export function Button(props) {
    return (
        <button type="button" class="btn btn-outline-dark">{props.label}</button>
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
