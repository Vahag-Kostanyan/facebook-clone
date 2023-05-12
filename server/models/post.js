const mongoose = require("mongoose");

const Post = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        description: {type: String, required: false},
        image: {type: String},
        createdAt: {type: Date, required: true},
        updatedAt: {type: Date, required: false}
    }
)

module.exports = mongoose.model("Post", Post)