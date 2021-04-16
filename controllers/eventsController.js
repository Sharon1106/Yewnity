const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Event
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findById: function(req, res) {
        db.Event
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      },
    create: function (req, res) {
        db.Event
            .create(req.body)
            .then(dbModel => {
                res.status(200).json(dbModel);},
                err => {res.status(400).json(err);});
    },
    update: function (req, res) {
        db.Event
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err))

    },

    remove: function(req, res) {
        db.Event
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove({_id: req.body._id}))
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      }
}