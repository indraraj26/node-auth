const Joi = require('joi');

exports.signUpValidator = (req, res, next) => {
    const joiValidate = Joi.object().keys({
        email: Joi.string().min(3).max(30).message('Email is required').required(),
        confirm_password: Joi.string().min(8).message('Confirm password is required').required(),
        password: Joi.string().min(8).message('Confirm password is required').required()
    }).options({abortEarly : false});
    const result =  joiValidate.validate(req.body);
    if(result.error != null) {
        return res.json({message: 'validation failed',error: result.error})
    }
    next();
} 