const { verifyUserToken } = require("../../helper");
const User = require("../../models/user");
const { editBio } = require("../../validations/userValidate");

exports.editBio = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const email = await verifyUserToken(token);
        
        const { error, value } = editBio.validate(req.body);
        
        if (error) return res.status(500).json({ massage: error.details[0].massage });
      
        const user = await User.findOneAndUpdate({ email: email }, { $set: { bio: req.body.bio } });
        
        if (!user) return res.status(500).json({ massage: "user not found" });

        return res.status(200).json(req.body.bio);

    } catch (error) {
        console.log(error);
    }
}

exports.UserSearch = async (req, res) => {
    const token = req.headers['x-access-token'];
    try{
        const userEmail = verifyUserToken(token);

        const users = await User.find({
            // email: { $ne: userEmail}
            fullName: { $regex: req.body.search, $options: "i" }
        }).select("fullName").select("avatar").limit(10)

        return res.status(200).json(users);
    }catch (error) {
        console.log(error);
    }
}