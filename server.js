const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// req.session.save(() => {
//   var stream = require('getstream');
//   // pass the app secret when connecting on the server-side
//   streamclient = stream.connect('56ngat98cs7g', 'fd9rhdxsrrq5uxv4c4jrzy895a6wqaz7pbhpvwraca6ycu4dg6zu2nb9yyndfbrx', '1120553', { location: 'us-west', timeout: 15000 });
//   // no feed token is req'd when the Stream client was connected with an app secret
//   var feed = streamclient.feed('user', 'jeff');
//   var feedToken = streamclient.createUserToken('jeff');
//   req.session.user_id = userData.id;
//   req.session.logged_in = true;
//   req.session.feedToken = feedToken
//   res.json({ user: userData, token: req.session.token, message: 'You are now logged in!' });
// });



//middlewar
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
