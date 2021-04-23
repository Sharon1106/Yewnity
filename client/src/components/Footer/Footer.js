import React from "react"
import image from "../../images/unity.png"
import "./Footer.css"
import {SocialLink, SocialList } from "../Form";

function Footer() {
    return (
        <div className="wrapper">
            <footer className="footer">
                <div className="child footer__link" >Social Media
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
                    <SocialLink url="/aboutus">About Us</SocialLink>
                </div>
                <div className="child footer__link">
                    <SocialLink url="https://www.facebook.com/yewnity.forall/">Donate</SocialLink>
                        <i className="fab fa-kickstarter"></i>
                </div>
                <div className="child">
                    <div className="unitywrapper">
                        <img className="unity" src={image} alt=""/>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;