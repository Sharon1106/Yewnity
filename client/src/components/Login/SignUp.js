import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Link } from 'react-router-dom';
import { Input, SubmitBtn } from "../Form";

export default class SignUp extends Component {
    //name is each of the titles 
    render() {
        return (
            <form className="signup">
                <h3 className="signup text-center">Sign Up</h3>
                {/* ---------- Component Added ~ Jeff ~ --> Can be found in components/form/ ------------ */}
                <Input
                name="Email Address"
                type="email"
                placeholder="Enter Email" 
                onchange={() => {}}
                />
                <Input
                name="Username"
                type="text"
                placeholder="Username" 
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
                
                // upon submitting user is saved to database and is taken to their profile page 
                onClick={() => {}}
            
                />
                {/* ---------------------------- END JEFF ADDITIONS ---------------------------- */}
                    <p>Already have an account?</p>

                    <Google/>
            </form>
        );
    }
}