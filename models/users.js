const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//------------------------this verifies the input has an @ symbol--------------------//
require('mongoose-type-email');
//displays message if no @ symbol provided in user input
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid';
//-----------------------------------------------------------------------------------//

const UserSchema = new Schema({
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        minLength: 6,
    },
    password: {
        type: String,
        minLength: 6,
    },
    image: {
        type: String,
    },
    events: [
        {
          type: Schema.Types.ObjectId,
          ref: "Event"
        },
      ],
});


UserSchema.pre("save", function (next) {
    const user = this;
    user.password = bcrypt.hashSync(user.password, 10);
    return next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;