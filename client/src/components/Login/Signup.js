import React, { Component } from "react";
import Google from '../googlelogin';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className=" my-5 text-center btn btn-primary btn-block">Sign Up</button>
                    <p>Already signed up?</p>
                    <Google/>
            </form>
        );
    }
}