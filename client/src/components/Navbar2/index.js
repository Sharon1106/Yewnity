import React , {useState}from "react";
import "./style.css";
import logo from "../../images/logo.png";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button"

const Navbar2 = () => {
    const [toggle,settoggle]=useState(false)
    const icon = ""
    // const user = null;
    const[user, setUser] = useState({
      email:"",
      username:"",
      password:"",
    })

    // redirect
    let history = useHistory()

    //onclick clear user info in local storage
  function handleLogout (event) {
    console.log("logout user")
    event.preventDefault()
    setUser({
      email:"",
      username:"",
      password:"",
    }) 
      localStorage.clear()
      history.push("/")
  };

  return (
    <header className ={toggle ? "nav-open":""} >
    <nav id="navbar" className="navbar navbar-expand-lg sticky fixed-top shadow-1 navbar-light bg-dark">
      <div className="container">
          <img className="icon" src={logo} height="50" alt="SM" loading="lazy" />
          <h1 class="title">Yewnity</h1>
          <button className="nav-toggle" onClick={()=>settoggle(!toggle)} aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
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
              <a className="nav-link" href="/forum">Forum</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">Profile</a>
            </li>
            <li className="nav-item">
            <Button onClick={handleLogout}>Logout</Button>
            </li>


            <li className="nav-item">
            </li>
        
          </ul>        
          <ul className="navbar-nav d-flex flex-row">
                  {/* Add-Another button or feature */}
              
          
            <li className="nav-item me-3 me-lg-0">
              {/* Add-Another button or feature */}
            </li>          
            <li className="nav-item me-3 me-lg-0">
          
            </li>
            <li className="nav-item me-3 me-lg-0 dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="dropdown">TEST</i>
              </a>
              <ul className="dropdown-content" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">TEST</a>
              </ul> 
            </li>
          </ul>
          <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" onClick={()=>settoggle(false)} className="nav__link">Main</a></li>
                <li className="nav__item"><a href="#about" onClick={()=>settoggle(false)} className="nav__link">Events</a></li>
                <li className="nav__item"><a href="#services" onClick={()=>settoggle(false)} className="nav__link">Issues</a></li>
                <li className="nav__item"><a href="#work" onClick={()=>settoggle(false)} className="nav__link">Forum</a></li>
                <button className="btn">Log-Out</button>
            </ul>
        </nav>

        </div> 
      </div>
    </nav>
    </header>
  )
}
export default Navbar2;