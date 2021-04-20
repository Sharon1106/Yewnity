import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Link } from 'react-router-dom';
import { Input } from "../Form";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                {/* ---------- Component Added ~ Jeff ~ --> Can be found in components/form/ ------------ */}
                <Input
                name="First Name"
                onchange={() => {}}
                type="text"
                placeholder="First Name" 
                />
                  <Input
                name="Last Name"
                onchange={() => {}}
                type="text"
                placeholder="Last Name" 
                />
                <Input
                name="Email Address"
                onchange={() => {}}
                type="email"
                placeholder="Enter Email" 
                />
                <Input
                name="Password"
                //do we need to add a funciton here?
                onchange={() => {}}
                type="password"
                placeholder="Enter Password" 
                />
                <button type="submit" className=" my-5 text-center btn btn-primary btn-block">Sign Up</button>
                    <p>Already signed up?</p>
                    <Google/>
            </form>
        );
    }
}