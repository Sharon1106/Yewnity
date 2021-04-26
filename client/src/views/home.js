import React from 'react';
import LandingHero from '../components/Hero/Hero';
import LandingCard from '../components/LandingCard/LandingCard';
import About from '../components/About/About';
import "./profile.css"

function AppHome() {
    return (
        <main>
            <LandingHero />
            <LandingCard />
            <About />
        </main>
    )
}

export default AppHome;