const router = require("express").Router();

const { login, signUp } = require("../controllers/registrationController/registration");

router.use("/login", login);
router.use("/signUp", signUp);


module.exports = router;