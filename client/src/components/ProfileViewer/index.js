import React from "react";

import "../../views/profile.css"
import Upload from "../Upload/Upload";

import avatar from './images/avatar.png'
import ImageUpload from '../ImageUpload/ImageUpload'


//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms
export function ProfileViewer(props) {
    return (
        <div className="card-body pt-0 pt-md-4">
        <div className="row">
            <div className="col">
                <ImageUpload user={props.user} setUser={props.setUser}/>
            </div>
        </div>


    </div>
    );
}
