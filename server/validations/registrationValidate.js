const Joi = require("joi");

exports.loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
});


exports.signUpValidation = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    gender: Joi.string().valid("male", "female", "custom").required(),
    birthday: Joi.date().max(new Date()),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
});