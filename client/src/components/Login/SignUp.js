import React, { Component } from "react";
import Google from '../GoogleLogin/googlelogin';
import { Link } from 'react-router-dom';
import { Input, SubmitBtn } from "../Form";
import API from "../../utils/API";

function SignUp () {
    //name is each of the titles 
    // const url=""
    const[users, setUsers] = useState({
        name:"",
        username:"",
        password:"",
    })

    function handleFormSubmit(event) {
        event.preventDefault()
          API.saveUser({
            email: users.email,
            username: users.username,
            password: users.password
          })
            .then(res =>{
            console.log(res.users)
        })
      };

      function handleInputChange(event) {
        const newuser = {...users}
        newuser[event.target.id] = event.target.value
        setUsers(newuser)
        console.log(newuser)
      };
 
        return (
            <form className="signup">
                <h3 className="signup text-center">Sign Up</h3>
                {/* ---------- Component Added ~ Jeff ~ --> Can be found in components/form/ ------------ */}
                <Input onchange={(event) => handleFormSubmit(event)
                name="Email Address"
                type="email"
                placeholder="Enter Email" 
                onchange={(event) => handleFormSubmit(event)}
                />
                <Input
                name="Username"
                type="text"
                placeholder="Username" 
                onchange={(event) => handleFormSubmit(event)}
                />
                <Input
                name="Password"
                type="password"
                placeholder="Enter Password" 
                onchange={(event) => handleFormSubmit(event)}
                />
                <SubmitBtn 
                name="Sign Up"
                type="submit"
                className=" my-5 text-center btn btn-primary btn-block"
                // upon submitting user is saved to database and is taken to their profile page 
                onchange={(event) => handleFormSubmit(event)}
            
                />
                {/* ---------------------------- END JEFF ADDITIONS ---------------------------- */}
                    <p>Already have an account?</p>

                    <Google/>
            </form>
        );
    
}