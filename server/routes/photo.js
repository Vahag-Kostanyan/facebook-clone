const router = require("express").Router();

const { uploadAvatar, uploadCoverPhoto, removeCoverPhoto, AddPost } = require("../controllers/user/uploadImageController");

router.post("/uploadAvatar", uploadAvatar);
router.post("/uploadCoverPhoto", uploadCoverPhoto);
router.post("/removeCoverPhoto", removeCoverPhoto);
router.post("/addPost", AddPost);

module.exports = router;
