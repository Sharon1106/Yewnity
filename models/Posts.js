const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PostSchema = new Schema ({
    profile_image: {
        type: String,
    },
    name: {
        type: String,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
    
    },
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;