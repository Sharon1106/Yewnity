import React from "react";
import './style.css';

//---------------------------EVENT MAIN CARD COMPONENT------------------------------//
function EventMain () {
    return (
        <div class="container">
        <div>
            <h1 id="event-title">Save the Turtles! (Event Name)</h1>
        </div>
    <div class="row">
        <div class="col-sm">
            <div id="profile-image">Event Image 155x123px - Will probably be a component plugged in here</div>
            <ul class="list-group list-group-flush" id="event-info">
                <li class="list-group-item">Time: 10AM</li>
                <li class="list-group-item">Date: 01/02/2097</li>
                <li class="list-group-item">1234 Fake St.</li>
                <li class="list-group-item">Fakeangeles, CA 98271</li>
            </ul>
        </div>
        <div class="col-sm-9">
            <div id="event-description">
                Save the Turtles!
            <br></br>
                orem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            <br></br>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
                in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in 
                section 1.10.32.
            
            </div>
        </div>
    </div>
    <div class="row">
        <button id="locate" class="col-sm-4">Locate</button>
        <button id="org-site"class="col-sm-4">Organization</button>
        <button id="add-to-events" class="col-sm-4">Follow Event</button>
    </div>

        </div>
    )
}

export default EventMain;