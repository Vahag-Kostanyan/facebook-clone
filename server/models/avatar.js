const mongoose = require("mongoose");

const Avatar = new mongoose.Schema(
    {
        userId: { type: String, required: true},
        image: {data: Buffer, contentType: String}
    }
)

module.exports = mongoose.model("avatar", Avatar)