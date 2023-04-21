const router = require("express").Router();
const registrationRoute = require("./registration");
const photoRoute = require("./photo");
const user = require("./user");

// groupe routes

// ----- registration route


router.use("/api", registrationRoute);
router.use("/api", user);
router.use("/api/photo", photoRoute);

// groupe routes


module.exports = router;