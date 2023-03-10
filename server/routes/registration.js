const router = require("express").Router();

const { login, signUp, getUser } = require("../controllers/registrationController/registration");

router.post("/login", login);
router.post("/signup", signUp);
router.get("/getUser", getUser);


module.exports = router;