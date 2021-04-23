import React from 'react';
import 'react-discussion-board/dist/index.css';
import './style.css';
import EventModal from "./EventModal";
import Events from "./DisplayEvents";



function MsgBoard() {

    return (
        <div className="MsgBoard">
            <EventModal />         
            <Events />
        </div>
    )
}

export default MsgBoard;