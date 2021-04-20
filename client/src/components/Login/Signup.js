import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Link } from 'react-router-dom';
import { Input, SubmitBtn } from "../Form";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                {/* ---------- Component Added ~ Jeff ~ --> Can be found in components/form/ ------------ */}
                <Input
                name="First Name"
                type="text"
                placeholder="First Name" 
                onchange={() => {}}
                />
                <Input
                name="Last Name"
                type="text"
                placeholder="Last Name" 
                onchange={() => {}}
                />
                <Input
                name="Email Address"
                type="email"
                placeholder="Enter Email" 
                onchange={() => {}}
                />
                <Input
                name="Password"
                type="password"
                placeholder="Enter Password" 
                onchange={() => {}}
                />
                <SubmitBtn 
                name="Sign Up"
                type="submit"
                className=" my-5 text-center btn btn-primary btn-block"
                onClick={() => {}}
                />
                {/* ---------------------------- END JEFF ADDITIONS ---------------------------- */}
                    <p>Already signed up?</p>
                    <Google/>
            </form>
        );
    }
}