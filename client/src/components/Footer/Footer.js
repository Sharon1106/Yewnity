import React , {useState }from "react"
import "./Footer.css"
function Footer () {
    return (
        <div className="wrapper">
            <footer className="footer">
            <a href="mailto:contact@matthewj.dev" className="footer__link">Contact:</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/matthew-john-644574204/">
                        <i className="fab fa-linkedin"></i>
                    </a></li>

                <li className="social-list__item"><a className="social-list__link" href="https://github.com/MattJ900">
                    <i className="fab fa-github"></i>
                </a></li>
                <li className="social-list__item"><a className="social-list__link"href="https://codepen.io/mattj900">
                    <i className="fab fa-codepen"></i>
                </a></li>
                <li className="social-list__item"><a target = "_blank" className="social-list__link"href="./images/2021.pdf">
                    <i className="fas fa-suitcase"></i>
                </a></li>             
            </ul>
        </footer>
    </div>

    )
    
}

export default Footer;