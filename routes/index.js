const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const authRoutes = require("../server/auth");

// API Routes
router.use("/api", apiRoutes);

//user authentication
// router.use("/routes/authRoutes.js", authRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;