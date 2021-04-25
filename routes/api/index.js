const express = require('express');
const router = express.Router();
const db = require('../../models');
const userRoutes = require('./users');
const eventRoutes = require('./events')
const loginRoutes = require('./login');

router.use("/users", userRoutes)
router.use("/events", eventRoutes)
router.use("/login", loginRoutes)

module.exports = router;