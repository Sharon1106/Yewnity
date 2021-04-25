import React from 'react';
import './about.css';
import Will from "../../images/Wil.png";
import Sharon from "../../images/Sharon.png";
import Jeff from "../../images/Jeff.png";
import Matthew2 from "../../images/Matt.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="wrapper">
            <header className="header sub_header">
                <h1 className="header_title">Meet the Yewnity Team</h1>
            </header>
            <div className="about">
                <main className="row">
                    <section className="col-md-3 profile">
                        <div className="circle">
                            <img className="profile-img" src={Jeff} alt="Jeff"></img>
                        </div>
                        <p>Jeffrey W. Patterson</p>
                        <div className="row">
                            <div className="col-md-3">
                                <button className="social-list__item0">
                                    <a className="social-list__link" href="https://github.com/jpatterson933">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item2">
                                    <a className="social-list__link" id="email1" href="mailto:jpatterson933@ucla.edu">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item1">
                                    <a className="social-list__link" href="https://www.linkedin.com/in/jefferywpatterson/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item3">
                                    <a className="social-list__link" href="https://github.com/MattJ900">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-3 profile">
                        <div className="circle2">
                            <img className="profile-img" src={Matthew2} alt='matthew'></img>
                        </div>
                        <p>Matthew A. John</p>
                        <div className="row">
                            <div className="col-md-3">
                                <button className="social-list__item0"><a className="social-list__link" href="https://github.com/MattJ900">
                                    <i className="fab fa-github"></i>
                                </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item2">
                                    <a className="social-list__link"
                                        id="email2" href="mailto:matthewj.dev">
                                        <i className="fas fa-envelope"></i>
                                    </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item1"><a className="social-list__link" href="https://github.com/MattJ900">
                                    <i className="fab fa-linkedin"></i>
                                </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item3"><a className="social-list__link" href="https://github.com/MattJ900">
                                    <i className="fab fa-facebook"></i>
                                </a></button>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-3 profile Sharon">
                        <div className="circle3">
                            <img className="profile-img" src={Sharon} alt='Sharon'></img>
                        </div>
                        <p>Sharon Martinez</p>
                        <div className="row">
                            <div className="col-md-3">
                                <button className="social-list__item0"><a className="social-list__link" href="https://github.com/Sharon1106/">
                                    <i className="fab fa-github"></i>
                                </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item2">
                                    <a className="social-list__link"
                                        id="email3" href="mailto:martinezsharonr@gmail.com">
                                        <i className="fas fa-envelope"></i>
                                    </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item1"><a className="social-list__link" href="https://www.linkedin.com/in/sharon-martinez-835723205/">
                                    <i className="fab fa-linkedin"></i>
                                </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item3"><a className="social-list__link" href="https://github.com/MattJ900">
                                    <i className="fab fa-facebook"></i>
                                </a></button>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-3 profile William">
                        <div className="circle4">
                            <img className="profile-img" src={Will} alt='Will'></img>
                        </div>
                        <p>William Thorne</p>
                        <div className="row">
                            <div className="col-md-3">
                                <button className="social-list__item0"><a className="social-list__link" href="https://github.com/IdFightGandhi">
                                    <i className="fab fa-github"></i>
                                </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item2">
                                    <a className="social-list__link"
                                        id="email4" href="mailto:williamcthorne@gmail.com">
                                        <i className="fas fa-envelope"></i>
                                    </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item1"><a className="social-list__link" href="https://www.linkedin.com/in/sharon-martinez-835723205/">
                                    <i className="fab fa-linkedin"></i>
                                </a></button>
                            </div>
                            <div className="col-md-3">
                                <button className="social-list__item3"><a className="social-list__link" href="https://github.com/MattJ900">
                                    <i className="fab fa-facebook"></i>
                                </a></button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <div className="description">
                <div className="tree">
                    <strong><h1> Our Story</h1>
                        <h4>Written by Matthew A. John</h4>
                        <br></br>
                        <p> Founded: April 2021, Yewnity deployed by UCLAx web developer rookies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Date 04/16/2021</p></strong>
                </div>
            </div>
        </div>
    )
}

export default About;