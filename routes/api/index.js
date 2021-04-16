const express = require('express');
const router = express.Router();
const db = require('../../models');
const userRoutes = require('./users');
const eventRoutes = require('./events')

router.use("/users", userRoutes)
router.use("/events", eventRoutes)


module.exports = router;