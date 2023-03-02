const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        birthday: { type: Date, required: true },
        gender: { type: String, required: true },
        password: { type: String, required: true },
    },
    { collation: "user" }
)

const model = mongoose.model("user", User);

module.exports = model;