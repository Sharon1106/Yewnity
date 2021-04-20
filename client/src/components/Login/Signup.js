import React, { Component } from "react";
import Google from '../GoogleLogin';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    
    render() {
        return (
            <form>
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
                    <Google/>
            </form>
        );
    }
}