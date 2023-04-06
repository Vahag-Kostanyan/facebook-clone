const User = require("../../models/user")
const jwt = require("jsonwebtoken");
const { verifyUserToken } = require("../../helper");

exports.uploadAvatar = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const email = await verifyUserToken(token);

        const user = await User.findOneAndUpdate({ email: email }, { $set: {avatar: req.body.avatar} }).select("-password");
        
        if (!user) {
            return res.status(500).json({"massage": "something was wrong"});
        }

        return res.status(200).json({"status": "ok", data: req.body.avatar});
    } catch (error) {
        console.log(error);
    }
}


exports.uploadCoverPhoto = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const email = await verifyUserToken(token);
        
        const user = await User.findOneAndUpdate({ email: email }, { $set: {cover: req.body.cover} }).select("-password");
        
        if (!user) {
            return res.status(500).json({"massage": "something was wrong"});
        }

        return res.status(200).json({data: req.body.cover});
    } catch (error) {
        console.log(error);
    }
}

exports.removeCoverPhoto = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const email = await verifyUserToken(token);

        const user = await User.findOneAndUpdate({ email: email }, { $set: {cover: null} });
        
        if (!user) {
            return res.status(500).json({"massage": "something was wrong"});
        }

        return res.status(200).json({massage: "cover photo deleted successfully"});
    } catch (error) {
        console.log(error);
    }
}