import React from 'react'
import LandingHero from '../components/Hero/Hero'
import LandingCard from '../components/LandingCard/LandingCard';
import About from '../pages/About/index'
import "./profile.css"

function AppHome() {
    return (
        <div className="main">
        <LandingHero/>
        <LandingCard />
        <About/>
        </div>
    )
}

export default AppHome;