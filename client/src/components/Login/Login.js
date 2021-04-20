import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Input } from "../Form";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Log In</h3>
                
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
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p>Or sign in with <Google/></p>
            </form>
        );
    }
}