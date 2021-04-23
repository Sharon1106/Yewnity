const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

//------------------------this verifies the input has an @ symbol--------------------//
require('mongoose-type-email');
//displays message if no @ symbol provided in user input
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid';
//-----------------------------------------------------------------------------------//


const OrganizationSchema = new Schema({
    email: {
        //email verification
        type: mongoose.SchemaTypes.Email,
        unique: true
    },
    organization: {
        type: String,
        unique: true,
    },
    bio: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
    },
    //we will need to use bcrypt somehwere here to encrypt password
    password: {
        type: String,
        minLength: 6,
    },
});

//causing issues with post routes-------------------------------
//before we save UserSchema to the database we runthis function
OrganizationSchema.pre("save", function (next) {
    const organization = this;

    organization.password = bcrypt.hashSync(organization.password, 10);
    console.log(organization)
    return next();
});

const Organization = mongoose.model("Organization", OrganizationSchema);

module.exports = Organization;