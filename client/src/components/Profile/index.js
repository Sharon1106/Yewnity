import React from "react";
import {Cloudinary} from 'cloudinary-core';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import { FormGroup, Label } from "../Form";

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
