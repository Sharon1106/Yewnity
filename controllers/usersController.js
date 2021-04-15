const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      },
    create: function (req, res) {
        console.log("create", req.body)
        db.User
            .create(req.body)

            .then(dbModel => {
                console.log("success");
                res.status(200).json(dbModel);
            },
                err => {
                    console.log("fail", err);
                    res.status(400).json(err);
            });
            
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err))

    },

    remove: function(req, res) {
        db.User
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove({_id: req.body._id}))
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      }
}