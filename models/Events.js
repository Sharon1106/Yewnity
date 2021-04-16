const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EventSchema = new Schema ({
    title: {
        type: String,
     
    },
    description: {
        type: String,
     
    },
    date: {
        type: String,
    
    },
    time: {
        type: String,
    
    },
    address: {
        type: String,
    }
});


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;