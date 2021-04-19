const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CommentSchema = new Schema ({
    description: {
        type: String,
     
    },
    date: {
        type: String,
    
    },
});


const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;