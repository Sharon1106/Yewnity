const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PostSchema = new Schema ({
    title: {
        type: String,
    },
    description: {
        type: String,
     
    },
    date: {
        type: Date,
    
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
    ]
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;