const { editBio, UserSearch } = require("../controllers/user/userController");

const router = require("express").Router();

router.post("/editBio", editBio);
router.post("/userSearch", UserSearch);

module.exports = router