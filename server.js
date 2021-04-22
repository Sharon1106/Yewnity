const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// const session = require ('express-session')
var Store = require('express-session').Store;
var MongooseStore = require('mongoose-express-session')(Store);


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    rolling: false,
    saveUninitialized: true,
    store: new MongooseStore({
        /* configuration */
        mongoose:mongoose,
        store:Store,

    })
}));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB /need to make changes once we have a mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yewnitydb");


//app running, not getting
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
