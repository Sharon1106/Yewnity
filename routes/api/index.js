const express = require('express');
const router = express.Router();
const db = require('../../models');
const userRoutes = require('./users');
const eventRoutes = require('./events')
const postRoutes = require('./posts');
const commentRoutes = require('./comments');

router.use("/users", userRoutes)
router.use("/events", eventRoutes)
router.use("/posts", postRoutes)
router.use("/comments", commentRoutes)


module.exports = router;