import React from "react";
import './style.css';

//--------------------------this page is for the MEDIUM version of our events - DISPLAEYED ON EVENTS TAB----------------//
function EventMini () {
    return (
<div  id="event-mini" class="container">
    <div class="row justify-content-between">
        <div class="row justify-content-start">
            <div id="event-title" class="col-sm-3">
                <p><b>Title! Save the Ocean!</b></p>
            </div>
        </div>
        <div id="event-date" class="col-sm-2">
            <p><b>Date:</b>01/02/2023</p>
        </div>
        <p id="event-description-mini" class="col-sm-6">
            orem Ipsum is simply dummy text of the printing and typesetting industry. 
            text ever since the 1500s, when an unknown printer took a galley of type 
        </p>
        <button id="view-event-main" class="col-3 justify-content-end">View Event</button>
 
    </div>
</div>
    )
}

export default EventMini;