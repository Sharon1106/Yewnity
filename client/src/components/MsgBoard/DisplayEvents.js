import React, { useState } from 'react';
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import { LargeInput, SubmitBtn } from "../Form";
import { DateTime, Input } from "../Events";
import './style.css';

export function DisplayEvents() {
  //[state, functionToUpdateState]
  const [events, setEvents] = useState({
    title: "",
    description: "",
    moment: "",
    city: "",
  })

  let history = useHistory();

  function EventForum() {
    console.log("Create event")

    API.getEvents({
      title: setEvents.title,
      description: setEvents.description,
      moment: setEvents.moment,
      city: setEvents.city
    })
      .then(res => {
        console.log(res)
        console.log("something")
      })
  };
  return (
    <div className="create-event card shadow-5-strong">
      <h3 className="text-center">{setEvents.title}</h3>
    </div>
  );
}
export default DisplayEvents;