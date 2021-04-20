const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IssueSchema = new Schema ({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    org_website: {
        type: String
    }
});


const Issue = mongoose.model("Issue", IssueSchema);

module.exports = Issue;