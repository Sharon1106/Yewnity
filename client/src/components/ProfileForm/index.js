import React from "react";
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import "../../views/profile.css"
import { Row } from "../Profile";
import { Form } from "../Form";



//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms

export function ProfileForm(props) {

    function updateName() {
    }
    function resetName() {
        props.setUser(JSON.parse(localStorage.getItem("user")))
    }
    return (
        <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">My account</h3>
                        </div>
                        <div className="col-4 text-right">
                            <a href="#!" className="btn btn-sm btn-primary">Update</a>
                            <a href="#!" onClick={resetName} className="btn btn-sm btn-primary">Reset</a>
                        </div>
                    </div>
                </div>
                {/* ------------------this is the form to update the users information---------------------------------- */}

                <div className="card-body">
                    <Form>
                        <h6 className="heading-small  mb-4">User information</h6>
                        <div className="pl-lg-4">
                            <Row>
                                <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label className="form-control-label" for="input-username">Username</label>
                                        <input type="text" id="input-username" onChange={(e) => props.setUser({ user: { ...props.user, username: e.target.value } })} value={props.user?.username} className="form-control form-control-alternative" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" for="input-email">Email address</label>
                                        <input type="email" id="input-email" onChange={(e) => props.setUser({ user: { ...props.user, email: e.target.value } })} value={props.user?.email} className="form-control form-control-alternative" placeholder="lion@example.com" />
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label className="form-control-label" for="input-first-name">Organizations</label>
                                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" />
                                    </div>
                                </div>

                            </Row>
                        </div>

                    </Form>
                   
                </div>
            </div>
        </div>

    );
}