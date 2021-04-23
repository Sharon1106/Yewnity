import React from 'react';
import './about.css';
import Will from "../../images/Wil.png";
import Sharon from "../../images/Sharon.png";
import Jeff from "../../images/Jeff.png";
// import Tree from "../../images/tree.png";
// import Tree2 from "../../images/tree2.png";
// import Bird from "../../images/bird.png";
import Matthew2 from "../../images/Matt.png";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (

        <div class="wrapper">
            <header class="header sub_header">
                <h1 class="header_title">Meet the Yewnity Team</h1>
            </header>
            <div class="about">
                <main class="row">
                    <section class="col-md-3 profile">
                        <div class="circle">
                            <img class="profile-img" src={Jeff}></img>

                        </div>
                        <p>Jeffrey W. Patterson</p>
                        <div class="row">
                            <div class="col-md-3">
                                <button class="social-list__item0">
                                    <a class="social-list__link" href="https://github.com/jpatterson933">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </button>
                            </div>
                            <div class="col-md-3">
                                <button class="social-list__item2">
                                    <a class="social-list__link" id="email1" href="mailto:jpatterson933@ucla.edu">
                                        <i class="fas fa-envelope"></i>
                                    </a>
                                </button>
                            </div>
                            <div class="col-md-3">
                                <button class="social-list__item1">
                                    <a class="social-list__link" href="https://www.linkedin.com/in/jefferywpatterson/">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </button>
                            </div>
                            <div class="col-md-3">
                                <button class="social-list__item3">
                                    <a class="social-list__link" href="https://github.com/MattJ900">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </button>
                            </div>

                        </div>
                    </section>
                    <section class="col-md-3 profile">
                        <div class="circle2">
                            <img class="profile-img" src={Matthew2} alt='matthew'></img>
                        </div>
                        <p>Matthew A. John</p>
                        <div class="row">
                            <div class="col-md-3">
                                <button class="social-list__item0"><a class="social-list__link" href="https://github.com/MattJ900">
                                    <i class="fab fa-github"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                                <button class="social-list__item2">
                                    <a class="social-list__link"
                                    id="email2" href="mailto:matthewj.dev">
                                     <i class="fas fa-envelope"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                                <button class="social-list__item1"><a class="social-list__link" href="https://github.com/MattJ900">
                                    <i class="fab fa-linkedin"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                                <button class="social-list__item3"><a class="social-list__link" href="https://github.com/MattJ900">
                                    <i class="fab fa-facebook"></i>
                                </a></button>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-3 profile Sharon">
                        <div class="circle3">
                            <img class="profile-img" src={Sharon} alt='Sharon'></img>
                        </div>
                        <p>Sharon Martinez</p>
                        <div class="row">
                            <div class="col-md-3">
                            <button class="social-list__item0"><a class="social-list__link" href="https://github.com/Sharon1106/">
                                    <i class="fab fa-github"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                            <button class="social-list__item2">
                            <a class="social-list__link"
                                    id="email3" href="mailto:martinezsharonr@gmail.com">
                                 <i class="fas fa-envelope"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                            <button class="social-list__item1"><a class="social-list__link" href="https://www.linkedin.com/in/sharon-martinez-835723205/">
                                <i class="fab fa-linkedin"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                            <button class="social-list__item3"><a class="social-list__link" href="https://github.com/MattJ900">
                                <i class="fab fa-facebook"></i>
                                </a></button>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-3 profile William">
                        <div class="circle4">
                            <img class="profile-img" src={Will} alt='Will'></img>
                        </div>
                        <p>William Thorne</p>
                        <div class="row">
                            <div class="col-md-3">
                            <button class="social-list__item0"><a class="social-list__link" href="https://github.com/IdFightGandhi">
                                    <i class="fab fa-github"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                            <button class="social-list__item2">
                                <a class="social-list__link" 
                                id="email4" href="mailto:williamcthorne@gmail.com">
                                <i class="fas fa-envelope"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                            <button class="social-list__item1"><a class="social-list__link" href="https://www.linkedin.com/in/sharon-martinez-835723205/">
                                <i class="fab fa-linkedin"></i>
                                </a></button>
                            </div>
                            <div class="col-md-3">
                            <button class="social-list__item3"><a class="social-list__link" href="https://github.com/MattJ900">
                                <i class="fab fa-facebook"></i>
                                </a></button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <div class="description">
                <div class="tree">
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