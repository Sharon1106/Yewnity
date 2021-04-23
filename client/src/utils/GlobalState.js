import React from "react";

const EventContext = React.createContext({
    title: "",
    description: "",
    moment: "",
    city: "",
});

export default EventContext;