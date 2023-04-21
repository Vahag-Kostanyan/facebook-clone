const { editBio } = require("../controllers/user/userController");

const router = require("express").Router();

router.post("/editBio", editBio);

module.exports = router