const User = require("../../models/user")
const Avatar = require("../../models/avatar");
const jwt = require("jsonwebtoken");

exports.uploadAvatar = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, { $set: {avatar: req.body.image} })

        if (!user) {
            return res.json({"status": "error", "massage": "something was wrong"});
        }

        return res.status(200).json({"status": "ok", user});
    } catch (error) {
        console.log(error);
    }
}

exports.getImages = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.json({ status: "error", massage: "User not found" })
        }

        const avatar = await Avatar.findOne({ userId: user._id })

        if (!avatar) {
            return res.json({ status: "error", massage: "avatar not found" })
        }

        res.status(200).json({ status: "ok", images: avatar.image })
    } catch (error) {
        console.log(error);
    }
}