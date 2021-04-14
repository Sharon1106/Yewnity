import React from "react";
import './style.css';

//--------------------------this page is for the MEDIUM version of our events - DISPLAEYED ON EVENTS TAB----------------//
function EventMed () {
    return (
<div  id="event-med" class="container">
        <div class="row justify-content-between">
            <div id="event-title">
                <p >Save the Turtles! (Event Name)</p>
            </div>
            <div id="event-date">
                <p>Date: 01/02/2023</p>
            </div>
        </div>
    <div>
        <div id="event-description-med">
            orem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
        </div>
    </div>
    <div id="event-button-bar" class="row justify-content-between">
        <button id="view-event-main" class="col-3">View Event</button>
        <button id="org-site"class="col-3">Organization</button>
        <button id="add-to-events" class="col-3">Follow Event</button>
    </div>
</div>
    )
}

export default EventMed;