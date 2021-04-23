import React from "react";

import "../../views/profile.css"

import avatar from './images/avatar.png'



//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms
export function ProfileViewer(props) {
    return (
        <div className="card-body pt-0 pt-md-4">
        <div className="row">
            <div className="col">
                <div className="ava">
                    <img className="avatar0" style={{ width: "300px", height: "250px", borderRadius: "80px" }}
                        src={avatar} alt="avatar"
                    />
                <br></br>



                    <button className="btn"> Upload Avatar Image</button>
                    <button className="btn"> Reset</button>
                    <div>
                        <h5>About me:</h5>
                        <h5>Contact Information:</h5>
                        <h5>Email:</h5>
                        <h5>Organizations:</h5>
                        <textarea></textarea>
                        <div className="profile" style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                            <input value={props.username}
                                onChange={(e) => props.setusername(e.target.value)}>

                            </input>
                            <button onClick={props.updateUsername}>Test</button>


                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
    );
}