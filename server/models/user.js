const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        birthday: { type: Date, required: true },
        gender: { type: String, required: true },
        avatar: {data: Buffer, contentType: String, required: false},
        password: { type: String, required: true },
    },
)
module.exports = mongoose.model("user", User);
