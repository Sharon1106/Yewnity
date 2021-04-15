const express = require('express');
const router = express.Router();
const db = require('../../models');
const userRoutes = require('./users');

router.use("/users", userRoutes)


module.exports = router;