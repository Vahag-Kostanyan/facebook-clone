const router = require("express").Router();

const { uploadAvatar, getImages } = require("../controllers/imgsController/uploadImage")

router.post("/uploadAvatar", uploadAvatar)
router.get("/getImages", getImages)

module.exports = router;
