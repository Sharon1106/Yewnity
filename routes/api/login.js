const router = require("express").Router();
const loginController = require("../../controllers/loginController.js");

router.route("/")
    .post(loginController.login);

module.exports = router;