import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { LargeInput, SubmitBtn, Form  } from "../Form";
import { DateTime } from "../Events";
import { Input } from "../Input";
import './style.css';

export function CreateEvent() {
  //[state, functionToUpdateState]
    const[events, setEvents] = useState({
      title:"",
      description:"",
      moment: "",
      city:"",
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory()
  
    function handleFormSubmit(event) {
      event.preventDefault()
      API.saveEvent({
        title: events.title,
        description: events.description,
        moment: events.moment,
        city: events.city
      })
        .then(res => {
          console.log(res)
        })
      };
    function handleInputChange(event) {
        const existingEvent = {...events}
        existingEvent[event.target.name] = event.target.value
        setEvents(existingEvent)
    };
    return (
        <div className="create-event card shadow-5-strong">
          <Form className="form-outline mb-4 card-body shadow-5-strong">
                <h3 className="text-center">Create New event</h3>
                    <Input
                        name="title"
                        label="Title of Event"
                        type="text"
                        placeholder="Enter Title" 
                        onChange={(event) => handleInputChange(event)}
                    />
                    <LargeInput
                        name="description"
                        label="Description of Event"
                        type="text"
                        placeholder="Enter Description"
                        onChange={(event) => handleInputChange(event)}
                    />
                    <DateTime
                        name="moment"
                        label="Date and Time of Event"
                        onChange={(event) => handleInputChange(event)}
                    />
                    <Input
                        name="city"
                        label="City Hosting Event"
                        type="text"
                        placeholder="Enter City" 
                        onChange={(event) => handleInputChange(event)}
                    />
                    <SubmitBtn 
                        className="btn btn-primary my-5 text-center btn-floating mx-1btn-block"
                        name="create-event"
                        type="submit"
                        onClick={ handleFormSubmit }
                        href="/events"
                    />
          </Form>
        </div>
    );
}
export default CreateEvent