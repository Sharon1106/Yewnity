const router = require("express").Router();
const postsController = require("../../controllers/postsController");

router.route("/")
    .get(postsController.findAll)
    .post(postsController.create);

router.route("/:id")
    .get(postsController.findById)
    .delete(postsController.remove)
    .put(postsController.update);

module.exports = router;