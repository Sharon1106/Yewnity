import React, { Component, useState, useEffect } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Input, SubmitBtn } from "../Form";
import "./SignUpLogin.css";
import API from "../../utils/API";


function Users () {
    // initial state
    const[users, setUsers] = useState([])
    const [formObject, setFormObject] = useState([])
    
      // Load all users and store them with setUsers
    useEffect(() => {
        loadUsers()
    }, [])

    // Loads all users and sets them to users
    function loadUsers() {
        API.getUsers()
          .then(res =>
            setUsers(res.data)
          )
          .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
 
      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.username) {
          API.saveUser({
            email: formObject.email,
            username: formObject.username,
            password: formObject.password
          })
            .then(res => loadUsers())
            .catch(err => console.log(err));
        }
      };
    
        return (
            <form className="login shadow-5-strong">
                <h3 className="signup text-center">Log In</h3>
                {/* ---------- Component Added ~ Jeff ~ --> Can be found in components/form/ ------------ */}
                <Input
                name="email"
                type="email"
                placeholder="Enter Email" 
                onchange={(handleInputChange) => {}}
                />
                    <Input
                name="username"
                type="text"
                placeholder="Enter Username" 
                onchange={(handleInputChange) => {}}
                />
                   <Input
                name="password"
                type="password"
                placeholder="Enter Password" 
                onchange={(handleInputChange) => {}}
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
                // when user submits then user is taken to their main feed 
                // onclick get user and route to profile page
                onClick={(handleFormSubmit) => {
                    
                }}
                />
                {/* - -------------------------------- - */}
                <p>Or sign in with <Google/></p>
            </form>
        );
}

export default Users;