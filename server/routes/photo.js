const router = require("express").Router();

const { uploadAvatar, uploadCoverPhoto, removeCoverPhoto } = require("../controllers/imgsController/uploadImage");

router.post("/uploadAvatar", uploadAvatar);
router.post("/uploadCoverPhoto", uploadCoverPhoto);
router.post("/removeCoverPhoto", removeCoverPhoto);

module.exports = router;
