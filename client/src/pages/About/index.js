import React from 'react';
import './about.css';
import Will from "../../images/Wil.png";
import Sharon from "../../images/Sharon.png";
import Jeff from "../../images/Jeff.png";
import Matthew from "../../images/Matthew.png";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        
        <div class="wrapper">
            <header class="header sub_header">
                <h1 class="header_title">Meet the Yewnity Team</h1>
            </header>
            <div class="about">
            <main class="row">
                <section class="col-md-3 profile Jeff">
                    <img class="profile-jeff" src={Jeff}></img>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <div class="row">
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i class="fab fa-twitter-square"></i>

                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>

                    </div>
                </section>
                <section class="col-md-3 profile Matthew">
                <img class="profile" src={Matthew}></img>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <div class="row">
                    <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                        <i class="fab fa-twitter-square"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                    </div>
                </section>
                <section class="col-md-3 profile William">
                <img class="profile" src={Sharon}></img>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <div class="row">
                    <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i class="fab fa-twitter-square"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                    </div>
                </section>
                <section class="col-md-3 profile Sharon">
                <img class="profile" src={Will}></img>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <div class="row">
                    <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                        <i class="fab fa-twitter-square"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                        <div class="col-md-3">
                        <button class="about_button">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                    </div>
                </section>
            </main>
            </div> 
            <div class="description">
                <p>The World is yours he World is yours he World is yours he World is yours he World is yours he World is yours he World is yours he World is yours he World is yours he World is yours he World is yours</p>
                </div> 
            </div>
         
    )
}



export default About;