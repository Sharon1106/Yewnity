import React from "react"
import image from "../../images/unity.png"
import "./Footer.css"
// import images from "../../images/unity.png"
function Footer() {
    return (
        <div className="wrapper">

            <footer className="footer">
                {/* <div className="footer__link">Social
            <ul className="social-list">
                        <li className="social-list__item"><a className="social-list__link" href="https://twitter.com/Yewnity1/">
                            <i class="fab fa-twitter"></i>
                        </a></li>

                        <li className="social-list__item"><a className="social-list__link" href="https://github.com/Sharon1106/Yewnity">
                            <i className="fab fa-github"></i>
                        </a></li>
                        <li className="social-list__item"><a className="social-list__link" href="https://www.youtube.com/channel/UClYS3rgySnucF8dn61pqEjA/">
                            <i class="fab fa-youtube"></i>
                        </a></li>
                        <li className="social-list__item"><a className="social-list__link" href="https://www.facebook.com/yewnity.forall/">
                            <i class="fab fa-facebook-f"></i>
                        </a></li>
                        <li className="social-list__item"><a className="social-list__link" href="https://www.facebook.com/yewnity.forall/">
                            <i class="fab fa-instagram"></i>
                        </a></li>
                    </ul>
                </div>

                <div className="footerb">About
            <a className="social-list__link" href="/aboutus">About US
                </a>
                </div>

                <div className="Unity">
                <img src={images} />
            </div> 
                <div className="footerc">Support
            <br></br>
                    <a className="social-list__link" href="/aboutus">Donate
                </a>
                </div> */}

            <div className="child footer__link" >Social Media
            <ul className="social-list">
                        <li className="social-list__item"><a className="social-list__link" href="https://twitter.com/Yewnity1/">
                            <i class="fab fa-twitter"></i>
                        </a></li>

                        <li className="social-list__item"><a className="social-list__link" href="https://github.com/Sharon1106/Yewnity">
                            <i className="fab fa-github"></i>
                        </a></li>
                        <li className="social-list__item"><a className="social-list__link" href="https://www.youtube.com/channel/UClYS3rgySnucF8dn61pqEjA/">
                            <i class="fab fa-youtube"></i>
                        </a></li>
                        <li className="social-list__item"><a className="social-list__link" href="https://www.facebook.com/yewnity.forall/">
                            <i class="fab fa-facebook-f"></i>
                        </a></li>
                        <li className="social-list__item"><a className="social-list__link" href="https://www.facebook.com/yewnity.forall/">
                            <i class="fab fa-instagram"></i>
                        </a></li>
                    </ul>
            </div>
                <div className="child footer__link">About
                <a className="social-list__link" href="/aboutus">About Us</a>
                </div>
                <div className="child footer__link">Support
                <a className="social-list__link" href="https://www.facebook.com/yewnity.forall/">Donate</a>
                
                <i class="fab fa-kickstarter"></i>

                </div>
            <div className="child">
            <div className="unitywrapper">
                <img className="unity"src={image}/>
            </div>    
            </div>
            </footer>






        </div>

    )

}
<i class="fab fa-facebook-f"></i>

export default Footer;