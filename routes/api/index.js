const express = require('express');
const router = express.Router();
const db = require('../../models');
const userRoutes = require('./users');
const eventRoutes = require('./events')
const commentRoutes = require('./comments');
const organizationRoutes = require('./organizations');
const loginRoutes = require('./login');

router.use("/users", userRoutes)
router.use("/events", eventRoutes)
router.use("/comments", commentRoutes)
router.use("/organizations", organizationRoutes)
router.use("/login", loginRoutes)

module.exports = router;