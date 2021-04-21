import React, { Component, useEffect, useState } from "react";
import Google from "../GoogleLogin/googlelogin";
import { useHistory } from "react-router-dom";
import { Input, SubmitBtn } from "../Form";
import API from "../../utils/API";

function SignUp () {
  const[user, setUser] = useState({
    email:"",
    username:"",
    password:"",
  })

  //redirect
  let history = useHistory() 

  //upon saving user redirect to profile page
  function handleFormSubmit(event) {
    console.log("im here now")
    event.preventDefault()
      API.saveUser({
        email: user.email,
        username: user.username,
        password: user.password
      })
      .then(res =>{
        console.log(res)
        history.push("/profile")
      })
  };

  function handleInputChange(event) {
    console.log("Im here")
    const newuser = {...user}
    newuser[event.target.name] = event.target.value
    setUser(newuser)
    console.log(newuser)
  };
 
  return (
      <div className="login shadow-5-strong">
    <form className="signup form-outline mb-4" >
      <h3 className="signup text-center">Sign Up</h3>
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
          onClick={ handleFormSubmit}
        />    
          <div class="text-center">
            <p>Already have an account? Log in below!</p>
            <p>or log in with:
                <Google/></p>
          </div>             
    </form>
  </div>
  );  
}

export default SignUp;