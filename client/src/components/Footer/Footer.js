import React from "react"
import image from "../../images/unity.png"
import "./Footer.css"
import { SocialLink, SocialList } from "../Form";

function Footer() {
    return (
        <footer id="footer">
            <div className="container-fluid ">
                <div className="row">
                    <div className="child col-md-6">
                        <div className="unitywrapper">
                            <img className="unity" alt="children playing" src={image} />
                        </div>
                    </div>
                    {/* me-auto mb-2 mb-lg-0 */}
                    <div className="child footer__link col-md-6">Social Media
                        <ul className="social-list">
                            {/* All of this is imported above CHECK:: line 4 from '../form' */}
                            <li>
                                <SocialList>
                                    <SocialLink url="https://twitter.com/Yewnity1/">
                                        <i className="fab fa-twitter"></i>
                                    </SocialLink>
                                </SocialList>
                            </li>
                            <li>
                                <SocialList>
                                    <SocialLink url="https://github.com/Sharon1106/Yewnity">
                                        <i className="fab fa-github"></i>
                                    </SocialLink>
                                </SocialList>
                            </li>
                            <li>
                                <SocialList>
                                    <SocialLink url="https://www.youtube.com/channel/UClYS3rgySnucF8dn61pqEjA/">
                                        <i className="fab fa-youtube"></i>
                                    </SocialLink>
                                </SocialList>
                            </li>
                            <li>
                                <SocialList>
                                    <SocialLink url="https://www.facebook.com/yewnity.forall/">
                                        <i className="fab fa-facebook-f"></i>
                                    </SocialLink>
                                </SocialList>
                            </li>
                            <li>
                                <SocialList>
                                    <SocialLink url="https://www.facebook.com/yewnity.forall/">
                                        <i className="fab fa-instagram"></i>
                                    </SocialLink>
                                </SocialList>
                            </li>
                        </ul>
                        <div className="col-md-6">
                            <p className="backtop">
                                <a href="/#">Back to top</a>
                            </p>
                        </div>
                    </div>
                    <div className="child footer__link col-md-6">
                        <SocialLink url="#footer">About Us</SocialLink>
                    </div>
                    <div className="child footer__link col-md-6">
                        <SocialLink url="https://www.facebook.com/yewnity.forall/">Donate</SocialLink>
                        <i className="fab fa-kickstarter"></i>
                    </div>
                </div>
                <div className="text-center text-white p-3">
                    © 2021 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">Yewnity</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;