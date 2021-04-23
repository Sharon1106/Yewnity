import React, { useState } from "react";
import Google from "./googlelogin";
import { useHistory } from "react-router-dom";
import { Input, SubmitBtn } from "../Form";
import API from "../../utils/API";
import Button from "./SignUpLogin"
function SignUp() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  })

  //redirect
  let history = useHistory()

  function handleFormSubmit(event) {
    console.log("sign up user")
    event.preventDefault()
    API.saveUser({
      email: user.email,
      username: user.username,
      password: user.password
    })
      .then(res => {
        console.log(res)
        localStorage.setItem("user", JSON.stringify(res.data))
        history.push("/profile")
      })
  };

  function handleInputChange(event) {
    console.log("Im here")
    const newuser = { ...user }
    newuser[event.target.name] = event.target.value
    setUser(newuser)
    console.log(newuser)
  };

  return (
    <div>
      <form className="signup" >
        <h3 className="signup">Sign Up</h3>
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
          name="signup"
          type="submit"
          className="btn btn-primary btn-block my-5 text-center"
          onClick={handleFormSubmit}
        />
        <div class="text-center">
          <p>Already have an account? Log in below!</p>
          <p>or log in with:
            <Google /></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;