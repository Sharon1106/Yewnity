import React, { useState } from 'react';
import 'react-discussion-board/dist/index.css';
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import { LargeInput, SubmitBtn  } from "../Form";
import { DateTime, Input } from "../Events";
import './MsgBoard.css';

export function CreateEvent() {
    const[events, setEvents] = useState({
      title:"",
      description:"",
      date:"",
      time:"",
      city:"",
    })
    //   useEffect(() => {
    //   const loggedInUser = API.getUser()
    //   if (loggedInUser) {
    //     const foundUser = JSON.stringify(loggedInUser);
    //     setUser(foundUser);
    //   }
    // }, [])
    
     // redirect
    let history = useHistory() 
  
    function handleFormSubmit(event) {
      console.log("Create event")
      event.preventDefault()
      //login route to get user by user name and password
      API.saveEvent({
        title: event.target.title,
        description: event.target.description,
        date: event.target.date,
        time: event.target.time,
        city: event.target.city
      })
        .then(res =>{
          console.log(res)

    
        })
      };
  
    function handleInputChange(event) {
        console.log("input gathered here")
        const existingEvent = {...events}
        existingEvent[event.target.name] = event.target.value
        setEvents(existingEvent)
        console.log(existingEvent)
    };
      
    return (
            <div className="create-event card shadow-5-strong">
            <form className="form-outline mb-4 card-body shadow-5-strong">
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
                        onClick={ handleFormSubmit}
                    />
            </form>
            </div>
    );
  }

export default CreateEvent