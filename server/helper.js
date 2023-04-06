const jwt = require("jsonwebtoken");

exports.verifyUserToken = async (token) => {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    return email;
}