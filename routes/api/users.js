const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .get(usersController.findAll)
    .post(usersController.create)
    .delete(usersController.remove);

module.exports = router;