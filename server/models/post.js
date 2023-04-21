const mongoose = require("mongoose");

const Post = new mongoose.Schema(
    {
        userId: {type: String, require: true},
        description: {type: String, require: false},
        photo: {type: Buffer, contentType: String, require: false}
    }
)

module.exports = mongoose.model("Post", Post)