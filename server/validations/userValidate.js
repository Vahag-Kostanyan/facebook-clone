const Joi = require("joi");

exports.editBio = Joi.object({
    bio: Joi.string().min(0).max(101)
});
