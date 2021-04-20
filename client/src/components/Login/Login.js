import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Input, SubmitBtn } from "../Form";
import "./SignUpLogin.css";

export default class Login extends Component {
    
    render() {
        return (
            <form className="login shadow-5-strong">
                <h3 className="signup text-center">Log In</h3>
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
                placeholder="Enter Username" 
                onchange={() => {}}
                />
                   <Input
                name="Password"
                type="password"
                placeholder="Enter Password" 
                onchange={() => {}}
                />
                {/* ---------------------------- END JEFF ADDITIONS ---------------------------- */}
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                {/* - Can be found in components/form/ - */}
                <SubmitBtn 
                name="Submit"
                type="submit"
                className="btn btn-primary btn-block"
                //we need to create a function to handleFormSubmit
                onClick={() => {}}
                />
                {/* - -------------------------------- - */}
                <p>Or sign in with <Google/></p>
            </form>
        );
    }
}