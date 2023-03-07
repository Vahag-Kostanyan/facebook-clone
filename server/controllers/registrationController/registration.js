const User = require("../../models/user")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        if (!user) {
           return res.json({ status: "error", massage: "User with this email not found!" })
        }
        checkPassword = await bcrypt.compare(req.body.password, user.password);


        if(!checkPassword){
           return res.json({ status: "error", massage: "Incorrect password" })
        }

        const name = user.firstName + " " + user.lastName;
        const token = jwt.sign({
            name: name,
            email: user.email
        },
            process.env.JWT_SECRET
        )
        return res.json({ status: "ok", token: token })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


exports.signUp = async (req, res) => {
    try {
        const checkUser = await User.findOne({ email: req.body.email });

        if (checkUser) {
            return res.json({ status: "error", massage: `User with this email ${req.body.email} already exist` });
        }

        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const user = await User.create(req.body)

        res.json({ status: "ok", massage: "User successfully created" });
    } catch (error) {
        console.log(error);
    }
}


exports.getUser = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        
        const user = await User.findOne({email: email});

        if(!user) {
            return res.json({status: "error", massage: "User not found"})
        }
        res.json({ status: "ok", data: user })
    } catch (error) {
        console.log(error);
    }
}