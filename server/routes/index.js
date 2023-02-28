const router = require("express").Router();
const registrationRoute = require("./registration");

// groupe routes

// ----- registration route
router.use("/api", registrationRoute);

// groupe routes


module.exports = router;