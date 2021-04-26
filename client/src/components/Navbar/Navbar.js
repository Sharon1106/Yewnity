import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useHistory, Link } from "react-router-dom";

const Navbar = () => {
  // const icon = "";
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  })

  // redirect
  let history = useHistory()

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
    <header>
      <nav id="navbar" className="navbar navbar-expand-lg sticky fixed-top shadow-5-strong bg-gradient-default ">
        <div className="container">
          <a href="/">
            <img className="icon" src={logo} height="50" alt="Yewnity" loading="lazy" />
          </a>
          <h1 class="title">Yewnity</h1>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-white">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/main">Main</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 me-lg-0 dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <i className="dropdown">Logout</i>
                </a>
                <ul className="dropdown-content" aria-labelledby="navbarDropdown">
                  <Link onClick={handleLogout}>Logout</Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </header>
  )
}

export default Navbar;