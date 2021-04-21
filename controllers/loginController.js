const db = require("../models");

module.exports = {
    login: function (req, res) {
        db.User
            .findOne({
              username: req.body.username,
              password: req.body.password
            })
            .then(dbModel => res.json(dbModel._id))
            .catch(err => res.status(400).json(err));
    },
}