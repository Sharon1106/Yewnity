import React from "react";
import './style.css';

//--------------------------this page is for the MEDIUM version of our events - DISPLAEYED ON EVENTS TAB----------------//
function IssueMini () {
    return (
<div  id="issue-mini" class="container">
    <div id="issue-title" class="row justify-content-center">
            <p><b>This is a major issue!</b></p>
    </div>
    <div class="row">
        <p id="issue-description-mini">
            orem Ipsum is simply dummy text of the printing and typesetting industry. 
            text ever since the 1500s, when an unknown printer took a galley of type 
        </p>
    </div>
    <div id="view-issue-external">
        <button class="row justify-content-center">External Link</button>
    </div>
    <div id="issue-tags" class="row justify-content-center">
        <p>Tags: turtles, ocean, green, planet</p>
    </div>
</div>
    )
}

export default IssueMini;