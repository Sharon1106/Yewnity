const router = require("express").Router();
const organizationsController = require("../../controllers/organizationsController");

router.route("/")
    .get(organizationsController.findAll)
    .post(organizationsController.create);

router.route("/:id")
    .get(organizationsController.findById)
    .delete(organizationsController.remove)
    .put(organizationsController.update);

module.exports = router;