import React from 'react'
import LandingCardItem from './LandingCardItem'
import './LandingCard.css'

function LandingCard() {
    return (
        <div className='cards'>
            <h1>ORGANIZATIONS HEADER</h1>
            <div className='cards-coontainer'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <LandingCardItem
                        src='images/Dummy-logo-1'
                        text="Test"
                        label="Org"
                        path='/org'
                        />
                        <LandingCardItem
                        src='images/Dummy-logo-1'
                        text="Test"
                        label="Org"
                        path='/org'
                        />
                        <LandingCardItem
                        src='images/Dummy-logo-1'
                        text="Test"
                        label="Org"
                        path='/org'
                        />
                        <LandingCardItem
                        src='images/Dummy-logo-1'
                        text="Test"
                        label="Org"
                        path='/org'
                        />
                        

                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default LandingCard;
