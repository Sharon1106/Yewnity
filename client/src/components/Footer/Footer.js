import React from "react";
import image from "../../images/unity.png";
import "./Footer.css";
import { SocialLink, SocialList } from "../Form";

function Footer() {
    return (
        <footer id="footer" className="page-footer font-small pt-4">
            <div className="container-fluid ">
                <div className="row">
                    <div className="child col-md-6 ">
                        {/* <div className="unitywrapper"> */}
                        <img className="unity my-3" alt="children playing" src={image} />
                        {/* </div> */}
                        <div className="row">
                            <div className="footer__link col-md-6 ">
                                <SocialLink url="/#about">About Us</SocialLink>
                            </div>
                            <div className="footer__link col-md-6 ">
                                <SocialLink url="https://www.facebook.com/yewnity.forall/">Donate</SocialLink>
                                <i className="fab fa-kickstarter"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="contactWrapper">
                            <div className="text-center my-5">Contact Us
                            </div>
                            <ul className="social-list">
                                {/* All of this is imported above CHECK:: line 4 from '../form' */}
                                <li>
                                    <SocialList>
                                        <SocialLink url="https://twitter.com/Yewnity1/">
                                            <i className="fab fa-twitter fa-2x"></i>
                                        </SocialLink>
                                    </SocialList>
                                </li>
                                <li>
                                    <SocialList>
                                        <SocialLink url="https://github.com/Sharon1106/Yewnity">
                                            <i className="fab fa-github fa-2x"></i>
                                        </SocialLink>
                                    </SocialList>
                                </li>
                                <li>
                                    <SocialList>
                                        <SocialLink url="https://www.youtube.com/channel/UClYS3rgySnucF8dn61pqEjA/">
                                            <i className="fab fa-youtube fa-2x"></i>
                                        </SocialLink>
                                    </SocialList>
                                </li>
                                <li>
                                    <SocialList>
                                        <SocialLink url="https://www.facebook.com/yewnity.forall/">
                                            <i className="fab fa-facebook-f fa-2x"></i>
                                        </SocialLink>
                                    </SocialList>
                                </li>
                                <li>
                                    <SocialList>
                                        <SocialLink url="https://www.facebook.com/yewnity.forall/">
                                            <i className="fab fa-instagram fa-2x"></i>
                                        </SocialLink>
                                    </SocialList>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="backtop text-center col-md-12 ">
                                    <a href="/#">Back to top<i className="fas fa-arrow-up my-5"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copywrite text-center text-white p-3" style={{ backGround: "#172b4d" }}>
                Copyright © 2021 :
                <a class="text-white" href=""> Yewnity</a>
            </div>
        </footer>
    )
}

export default Footer;