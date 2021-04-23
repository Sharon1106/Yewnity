const db = require("../models");

module.exports = {
    login: function (req, res) {
      console.log("TESTING-----------")
        db.User
            .findOne({
              username: req.body.username,
              password: req.body.password
            })
            
            .then(dbModel => {
              req.session.save(() => {
                var stream = require('getstream');
                // pass the app secret when connecting on the server-side
                streamclient = stream.connect('56ngat98cs7g', 'fd9rhdxsrrq5uxv4c4jrzy895a6wqaz7pbhpvwraca6ycu4dg6zu2nb9yyndfbrx', '1120553', { location: 'us-west', timeout: 15000 });
                // no feed token is req'd when the Stream client was connected with an app secret
                var feed = streamclient.feed(dbModel.username, dbModel._id);
                var feedToken = streamclient.createUserToken(dbModel.username);
                req.session.user_id = dbModel._id;
                req.session.logged_in = true;
                req.session.feedToken = feedToken
                res.json({ user: dbModel, token: req.session.feedToken, message: 'You are now logged in!' });
              });
            
            })

            .catch(err => res.status(400).json(err));
    },
}