import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Input, SubmitBtn } from "../Form";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Log In</h3>
                {/* ---------- Component Added ~ Jeff ~ --> Can be found in components/form/ ------------ */}
                <Input
                name="Email Address"
                type="email"
                placeholder="Enter Email" 
                onchange={() => {}}
                />
                   <Input
                name="Password"
                //do we need to add a funciton here?
                type="password"
                placeholder="Enter Password" 
                onchange={() => {}}
                />
                {/* ---------------------------- END JEFF ADDITIONS ---------------------------- */}

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            
    {/* - Can be found in components/form/ - */}
                <SubmitBtn 
                name="Submit"
                type="submit"
                className="btn btn-primary btn-block"
                //we need to create a function to handleFormSubmit
                onClick={() => {}}
                />
    {/* - -------------------------------- - */}
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p>Or sign in with <Google/></p>
            </form>
        );
    }
}