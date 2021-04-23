import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { List, ListItem } from "../List";
import { Card } from "../Events";
import './style.css';




function Events() {
  //[state, functionToSetState]
  const [events, setEvents] = useState([])

  // load all events and store them with setEvents
  useEffect(() => {
    loadEvents()
  }, [])

  //loads all events
  function loadEvents() {
    API.getEvents()
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {events.length ? (
        <List>
          {/* we map through our state */}
          {events.map(event => (
            <ListItem key={event._id}>
              <Card
                title={event.title}
                description={event.description}
                moment={event.moment}
                city={event.city}
                user={event.user[0].username}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Events to Display</h3>
      )}
    </div>
  );
}

export default Events;