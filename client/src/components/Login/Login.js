import React, { Component, useState, useEffect } from "react";
import Google from '../GoogleLogin/googlelogin';
import { useHistory } from "react-router-dom";
import { Input, SubmitBtn } from "../Form";
import "./SignUpLogin.css";
import API from "../../utils/API";
import { idText } from "typescript";

function Login () {
  const[user, setUser] = useState({
    email:"",
    username:"",
    password:"",
  })

    //redirect
    let history = useHistory() 

    function handleFormSubmit(event) {
      console.log("Login user")
      event.preventDefault()
      API.saveUser({
        email: user.email,
        username: user.username,
        password: user.password
      })
      .then(res =>{
        console.log(res)
        history.push("/main")
      })
    };

    
  function handleInputChange(event) {
    console.log("Im here")
    const newuser = {...user}
    newuser[event.target.name] = event.target.value
    setUser(newuser)
    console.log(newuser)
  };

  // useEffect(() => {
  //   const loggedInUser = API.getUser("id")
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, [])

   // //onclick clear user info in local storage
  // function handleLogout () {
  //   setUser({
  //     email:"",
  //     username:"",
  //     password:"",
  //   });
  //   localStorage.clear();
  // };

    // if there's a user show the message below
    // if (user) {
    //   return (
    //     <div>
    //       {user.name} is logged in
    //       <button onClick={handleLogout}>logout</button>
    //     </div>
    //   );
    // }
    
  return (
  <div className="login shadow-5-strong">
    <form className="login form-outline mb-4 shadow-5-strong">
      <h3 className="signup text-center">Log In</h3>
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
          placeholder="Enter Username" 
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Password" 
          onChange={(event) => handleInputChange(event)}
        />
          {/* ---------------------------- END JEFF ADDITIONS ---------------------------- */}
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
            {/* - Can be found in components/form/ - */}
            <SubmitBtn 
              className="btn btn-primary btn-floating mx-1"
              name="login"
              type="submit"
              className=" my-5 text-center btn btn-primary btn-block"
              onClick={ handleFormSubmit}
            />
            {/* <SubmitBtn 
              name="logout"
              type="submit"
              className=" my-5 text-center btn btn-primary btn-block"
              onClick={ handleLogout }
            /> */}
              {/* - -------------------------------- - */}
              <div class="text-center">
                <p>Not a member? Sign up below!</p>
                <p>or sign up with:
                <Google/>
                </p>
                </div>
    </form>
  </div> 
  );
}

export default Login;