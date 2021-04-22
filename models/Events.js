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
    moment: {
        type: String,
        required: true,   
    },
    city: {
        type: String,
        require: true
    }
});


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;