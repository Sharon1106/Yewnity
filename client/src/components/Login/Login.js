import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';

export default class Login extends Component {
    
    render() {
        return (
            <form>
                <h3 className="signup text-center">Log In</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username"placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p>Or sign in with <Google/></p>
            </form>
        );
    }
}