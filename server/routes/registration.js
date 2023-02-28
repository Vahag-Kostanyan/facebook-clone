const router = require("express").Router();

const { login, signUp } = require("../controllers/registrationController/registration");

router.use("/login", login);
router.use("/signup", signUp);


module.exports = router;