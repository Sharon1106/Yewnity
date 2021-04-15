import React from 'react'
import LandingCardItem from './LandingCardItem'
import './LandingCard.css'
import orgcard1 from '../../images/Dummy-logo-1.png'
import orgcard2 from '../../images/Dummy-logo-2.jpeg'
import orgcard3 from '../../images/Dummy-logo-3.jpeg'
import orgcard4 from '../../images/Dummy-logo-4.jpeg'

function LandingCard() {
    return (
        <div className='cards'>
            <h1>ORGANIZATIONS HEADER</h1>
            <div className='cards-coontainer'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <LandingCardItem
                        src={ orgcard1 }
                        style={{width:'100px', height:100, position:'absolute'}}
                        text="Test"
                        label="Org"
                        path='/org'
                        />
                        <LandingCardItem
                        src={orgcard2}
                        style={{width:100, height:100, position:'absolute'}}
                        text="Test2"
                        label="Org"
                        path='/org'
                        />
                        <LandingCardItem
                        src={orgcard3}
                        text="Test3"
                        label="Org"
                        path='/org'
                        />
                        <LandingCardItem
                        src={orgcard4}
                        text="Test4"
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
