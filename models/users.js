const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')


const UserSchema = new Schema ({
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true,
    },
    //we will need to use bcrypt somehwere here to encrypt password
    password: {
        type: String,
    },
    events: [
        {
          type: Schema.Types.ObjectId,
          ref: "Event"
        }
      ]
});

//causing issues with post routes-------------------------------
//before we save UserSchema to the database we runthis function
UserSchema.pre("save", function(next) {
    const user = this;
    
    user.password = bcrypt.hashSync(user.password, 10);
    console.log(user)
    return next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;