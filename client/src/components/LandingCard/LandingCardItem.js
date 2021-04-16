import React from 'react'
import { Link } from 'react-router-dom'

function LandingCardItem(props) {
    return (
        <>
        <li className="cards-item">
            <Link
            className="cards-item-link" to={props.path}>
                <figure className="cards-item-pic-wrap" data-category={props.label}>
                    <img 
                    src={props.src}
                    alt="Orgs Image"
                    className="cards-item-img"/>
                </figure>
                <div className="cards-item-info">
                    <h5 className='cards-item-text'></h5>
                </div>
            

            </Link>
        </li>


        </>
    )
}

export default LandingCardItem;