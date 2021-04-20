import React, { Component, useEffect, useState } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Input, SubmitBtn } from "../Form";
import API from "../../utils/API";

function SignUp () {
    //name is each of the titles 
    // const url=""
    const[users, setUsers] = useState({
        email:"",
        username:"",
        password:"",
    })
    let history = useHistory() 

    function handleFormSubmit(event) {
      console.log("im here now")
        event.preventDefault()
          API.saveUser({
            email: users.email,
            username: users.username,
            password: users.password
          })
            .then(res =>{
            console.log(res)
            history.push("/profile")
        })
      };

      function handleInputChange(event) {
        console.log("Im here")
        const newuser = {...users}
        newuser[event.target.name] = event.target.value
        setUsers(newuser)
        console.log(newuser)
      };
 
        return (
            <form className="signup">
                <h3 className="signup text-center">Sign Up</h3>
                {/* ---------- Component Added ~ Jeff ~ --> Can be found in components/form/ ------------ */}
                <Input
                name="email"
                type="email"
                placeholder="Enter Email" 
                onChange={(event) => handleInputChange(event)}
                />
                <Input
                name="username"
                type="text"
                placeholder="Username" 
                onChange={(event) => handleInputChange(event)}
                />
                <Input
                name="password"
                type="password"
                placeholder="Enter Password" 
                onChange={(event) => handleInputChange(event)}
                />
                <SubmitBtn 
                name="Sign Up"
                type="submit"
                className=" my-5 text-center btn btn-primary btn-block"
                // upon submitting user is saved to database and is taken to their profile page 
                onClick={ handleFormSubmit}
            
                />
                {/* ---------------------------- END JEFF ADDITIONS ---------------------------- */}
                    <p>Already have an account?</p>

                    <Google/>
            </form>
        );
    
}

export default SignUp;