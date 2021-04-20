const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Issue
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findById: function(req, res) {
        db.Issue
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      },
    create: function (req, res) {
        console.log("create", req.body)
        db.Issue
            .create(req.body)

            .then(dbModel => {
                console.log("success");
                res.status(200).json(dbModel);
            },
                err => {
                    console.log("fail", err);
                    res.status(400).json(err);
            });
            //need to add the code below to save the sessesion -------- our LOGIN TOKEN
            // req.session.save(() => {
            //     req.session.Issue_id = IssueData.id;
            //     req.session.logged_in = true;
                
            //     res.json({ Issue: IssueData, message: 'You are now logged in!' });
            //   });
    },
    update: function (req, res) {
        db.Issue
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err))

    },

    remove: function(req, res) {
        db.Issue
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove({_id: req.body._id}))
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      }
}