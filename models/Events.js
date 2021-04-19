const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EventSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,    
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