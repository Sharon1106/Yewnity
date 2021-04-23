import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { NavLink } from "../List";
import { useHistory, Link } from "react-router-dom";
// import Button from "../Button/Button";
// import Logout from "../Login/SignUpLogin"
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

const Navbar = () => {
  // const icon = "";
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  })

  // redirect
  let history = useHistory()

  //onclick clear user info in local storage
  function handleLogout(event) {
    console.log("logout user")
    event.preventDefault()
    setUser({
      email: "",
      username: "",
      password: "",
    })
    localStorage.clear()
    history.push("/")
  };

  return (
    <nav id="navbar" className="navbar navbar-expand-lg sticky fixed-top shadow-1 navbar-light bg-dark">
      <div className="container">
        <img className="icon" src={logo} height="50" alt="SM" loading="lazy" />
        <h1 class="title">Yewnity</h1>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-white bg-dark">
            <NavLink href="/" linkName="Home" />
            <NavLink href="/main" linkName="Main" />
            <NavLink href="/events" linkName="Events" />
            <NavLink href="/profile" linkName="Profile" />
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            {/* Add-Another button or feature */}
            <li className="nav-item me-3 me-lg-0 dropdown">
              <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="dropdown">Logout</i>
              </a>
              <ul className="dropdown-content" aria-labelledby="navbarDropdown">
                <Link onClick={handleLogout}>Logout</Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;