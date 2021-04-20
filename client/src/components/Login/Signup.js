import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Link } from 'react-router-dom';
import { Input, SubmitBtn } from "../Form";

export default class SignUp extends Component {
    
    render() {
        return (
<<<<<<< HEAD
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
=======
            <form className="signup">
                <h3 className="signup text-center">Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className=" my-5 text-center btn btn-primary btn-block">Sign Up</button>
                    <p>Already have an account?</p>
>>>>>>> 172f3c17c35396612d76774cbf51da87d85fb42f
                    <Google/>
            </form>
        );
    }
}