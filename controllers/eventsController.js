const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Event
            .find(req.query)
            .populate("user")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findById: function (req, res) {
        db.Event
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        // console.log(req.body, "this is in the controller")
        // date = req.body.moment.split("T").join("Date:", [0], "Time: ", [1]);
        // console.log(date)

        db.Event.create( {
            ...req.body,
            user: req.session.user_id
        })
            .then(dbModel => {
                res.status(200).json(dbModel);
            })
            .catch(
                err => {
                    res.status(400).json(err);
                });
    },
    update: function (req, res) {
        db.Event
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err))
    },

    remove: function (req, res) {
        db.Event
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove({ _id: req.body._id }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    }
}