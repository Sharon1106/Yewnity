import React from 'react'
import profilepic from '../images/User-Example.jpeg'

const Profile = () => {
    return (
        <div>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"300px", height:"250px", borderRadius:"80px"}} 
                    src={ profilepic }
                    />
                </div>
                <div>
                    <h4>Guy McFly</h4>
                    <div style={{display:"flex",justifyContent:"space-between", width:"108%"}}>
                        <h6>Something hoes here</h6>
                        <h6>Something hoes here</h6>
                        <h6>Something hoes here</h6>
                    </div>
                </div>
           </div>
           
        </div>
        
    )
}

export default Profile
