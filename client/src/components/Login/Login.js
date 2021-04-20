import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
<<<<<<< HEAD
import { Input, SubmitBtn } from "../Form";
=======
import "./SignUpLogin.css";
>>>>>>> 172f3c17c35396612d76774cbf51da87d85fb42f

export default class Login extends Component {
    
    render() {
        return (
<<<<<<< HEAD
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

=======
            <form className="login shadow-5-strong">
                <h3 className="signup text-center">Log In</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" placeholder="Username" />
                </div>
>>>>>>> 172f3c17c35396612d76774cbf51da87d85fb42f
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
<<<<<<< HEAD
            
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
=======
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
>>>>>>> 172f3c17c35396612d76774cbf51da87d85fb42f
                <p>Or sign in with <Google/></p>
            </form>
        );
    }
}