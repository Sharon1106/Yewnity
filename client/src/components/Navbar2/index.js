import React , {useState }from "react"
import "./style.css"
import logo from "../../images/logo.png";

const Navbar2 = () => {
    const [toggle,settoggle]=useState(false)
    const icon = ""
  return (
    <header className ={toggle ? "nav-open":""} >
    <nav id="navbar" className="navbar navbar-expand-lg sticky fixed-top shadow-1 navbar-light bg-dark">
      <div className="container">
          <img className="icon" src={logo} height="50" alt="SM" loading="lazy" />
          <h1 class="title">Yewnity</h1>
          <button className="nav-toggle" onClick={()=>settoggle(!toggle)} aria-label="toggle navigtion">
            <span className="hamburger"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link " aria-current="page" href="#">Main <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Forum</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-me">Profile</a>
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
                <a className="dropdown-item" href="#">TEEST</a>
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