// removed useEffect/ import if used
import React, { useState } from "react";
import Google from './googlelogin';
import { useHistory } from "react-router-dom";
import { Input, SubmitBtn } from "../Form";
import "./SignUpLogin.css";
import API from "../../utils/API";
import Bcrypt from "bcryptjs";

function Login() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  })

  // redirect
  let history = useHistory()

  function handleFormSubmit(event) {
    console.log("Login user")
    console.log(user)
    event.preventDefault()
    //login route to get user by user name and password
    API.login({
      username: user.username,
      //pass in hashed password
      password: user.password,
    })
      .then((res, req) => {

        console.log(res)
        localStorage.setItem("user", JSON.stringify(res.data))
        history.push("/profile")
      })
  }


  function handleInputChange(event) {
    console.log("Im here")
    const existingUser = { ...user }
    existingUser[event.target.name] = event.target.value
    setUser(existingUser)
    console.log(existingUser)
  };

  return (
    <div className="login shadow-5-strong">
      <form className="login form-outline mb-4 shadow-5-strong">
        <h3 className="signup text-center">Log In</h3>
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
        <SubmitBtn
          name="login"
          type="submit"
          className="btn btn-primary btn-block my-5 text-center "
          onClick={handleFormSubmit}
        />
        <div class="text-center">
          <p>Not a member? Sign up below!</p>
          <p>or sign up with:
            <Google /></p>
        </div>
      </form>
    </div>
  );
}

export default Login;