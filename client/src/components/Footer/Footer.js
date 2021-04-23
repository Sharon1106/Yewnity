import React from "react"
import image from "../../images/unity.png"
import "./Footer.css"
import { SocialLink, SocialList } from "../Form";

function Footer() {
    return (
        <footer id="footer" style={{
            backgroundColor: "linear-gradient(87deg, #172b4d 0, #1a174d 100%);"
        }}>
            <div className="container" style={{
                backgroundColor: "linear-gradient(87deg, #172b4d 0, #1a174d 100%);"
            }}>
                {/* <p className="float-right">
                    <a href="#">Back to top</a>
                </p> */}
                <div className="child footer__link me-auto mb-2 mb-lg-0" >Social Media
                    <ul className="social-list">
                        {/* All of this is imported above CHECK:: line 4 from '../form' */}
                        <SocialList>
                            <SocialLink url="https://twitter.com/Yewnity1/">
                                <i className="fab fa-twitter"></i>
                            </SocialLink>
                        </SocialList>
                        <SocialList>
                            <SocialLink url="https://github.com/Sharon1106/Yewnity">
                                <i className="fab fa-github"></i>
                            </SocialLink>
                        </SocialList>
                        <SocialList>
                            <SocialLink url="https://www.youtube.com/channel/UClYS3rgySnucF8dn61pqEjA/">
                                <i className="fab fa-youtube"></i>
                            </SocialLink>
                        </SocialList>
                        <SocialList>
                            <SocialLink url="https://www.facebook.com/yewnity.forall/">
                                <i className="fab fa-facebook-f"></i>
                            </SocialLink>
                        </SocialList>
                        <SocialList>
                            <SocialLink url="https://www.facebook.com/yewnity.forall/">
                                <i className="fab fa-instagram"></i>
                            </SocialLink>
                        </SocialList>
                    </ul>
                </div>
                <div className="child footer__link">
                    <SocialLink url="#footer">About Us</SocialLink>
                </div>
                <div className="child footer__link">
                    <SocialLink url="https://www.facebook.com/yewnity.forall/">Donate</SocialLink>
                    <i className="fab fa-kickstarter"></i>
                </div>
                <div className="child">
                    <div className="unitywrapper">
                        <img className="unity" alt="children playing" src={image} />
                    </div>
                </div>
            </div>

            <div className="text-center p-3">
                © 2021 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">Yewnity</a>
            </div>
        </footer>
    )
}

export default Footer;