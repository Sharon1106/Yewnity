import React from "react";
import './style.css';

//--------------------------this page is for the MEDIUM version of our events - DISPLAEYED ON EVENTS TAB----------------//
function EventMini () {
    return (
<div  id="event-mini" class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-med-3 col-lg-3">
            <div id="event-title">
                <p><b>Title! Save the Ocean!</b></p>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-med-2 col-lg-2">
            <div id="event-date" >
                <p><b>Date:</b>01/02/2023</p>
            </div>
        </div>
        <p id="event-description-mini" class="col-xs-12 col-sm-12 col-med-6 col-lg-6">
            orem Ipsum is simply dummy text of the printing and typesetting industry. 
            text ever since the 1500s, when an unknown printer took a galley of type 
        </p>
        <button id="view-event-main" class="col-xs-12 col-sm-12 col-med-1 col-lg-1 justify-content-end">View Event</button>
 
    </div>
</div>
    )
}

export default EventMini;