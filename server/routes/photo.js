const router = require("express").Router();

const { uploadAvatar, uploadCoverPhoto, removeCoverPhoto, addPost, getPost } = require("../controllers/user/uploadImageController");

router.post("/uploadAvatar", uploadAvatar);
router.post("/uploadCoverPhoto", uploadCoverPhoto);
router.post("/removeCoverPhoto", removeCoverPhoto);
router.post("/getPost", getPost);
router.post("/addPost", addPost);

module.exports = router;
