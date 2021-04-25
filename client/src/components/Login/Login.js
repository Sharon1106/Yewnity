// removed useEffect/ import if used
import React, { useState } from "react";
import Google from './googlelogin';
import { useHistory } from "react-router-dom";
import { Input, SubmitBtn } from "../Form";
import "./SignUpLogin.css";
import API from "../../utils/API";
// import Bcrypt from "bcryptjs";

function Login() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  })

  // redirect
  let history = useHistory()

  function handleFormSubmit(event) {
    event.preventDefault()
    //login route to get user by user name and password
    API.login({
      username: user.username,
      password: user.password,
    })
      .then((res, req) => {
        localStorage.setItem("user", JSON.stringify(res.data))
        history.push("/profile")
      })
  }


  function handleInputChange(event) {
    const existingUser = { ...user }
    existingUser[event.target.name] = event.target.value
    setUser(existingUser)
  };

  return (
    <div className="login shadow-5-strong">
      <form className="login form-outline mb-4 shadow-5-strong">
        <h3 className="signup text-center">Log In</h3>
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
        <div className="text-center">
          <p>Not a member? Sign up below!</p>
          <p>or sign up with:
            <Google /></p>
        </div>
      </form>
    </div>
  );
}

export default Login;