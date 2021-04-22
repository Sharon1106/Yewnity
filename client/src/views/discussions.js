import React from 'react'
// import MsgBoard from '../components/MsgBoard/MsgBoard';
import MsgBoard from '../components/MsgBoard/MsgBoard';
import { Button } from '../components/Form';



function Discussions() {
    return (
        <div className='discussion'>
            <MsgBoard />
            <Button
            label="Create Event"
            />
            {/* <MsgBoard
            /> */}
        </div>
    )
}

export default Discussions;
