const joi = require('joi')

const userSchema = joi.object({
    fullName: joi.string().min(4).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required()
})

module.exports = userSchema