import React from 'react'
import LandingHero from '../components/Hero/Hero'
import LandingCard from '../components/LandingCard/LandingCard';

function AppHome() {
    return (
        <div className="main">
        <LandingHero/>
        <LandingCard />
        </div>
    )
}

export default AppHome;