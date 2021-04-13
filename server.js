const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB /need to make changes once we have a mongo database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");


//app running, not getting
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}!`);
});
