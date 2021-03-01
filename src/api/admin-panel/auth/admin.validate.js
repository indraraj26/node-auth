const Joi = require('joi');

exports.signUpValidator = (req, res, next) => {
    const joiValidate = Joi.object().keys({
        email: Joi.string().min(3).max(30).required(),
        confirm_password: Joi.string().min(8).message('Confirm password is required').required(),
        password: Joi.string().min(8).message('Confirm password is required').required()
    }).options({abortEarly : false});
    const result =  joiValidate.validate(req.body);
    if(result.error != null) {
        return res.json({message: 'validation failed',error: result.error})
    }
    next();
};
 
exports.signInValidator = (req, res, next) => {
    const joiValidate = Joi.object().keys({
        email: Joi.string().min(5).max(10).required().messages({
            'string.base': `"a" should be a type of 'text'`,
            'string.empty': `"a" cannot be an empty field`,
            'string.min': `"a" should have a minimum length of {#limit}`,
            'any.required': `"a" is a required field`
          }),
        password: Joi.string().min(8).message('Confirm password is required').required()
    }).options({abortEarly : false});
    const result =  joiValidate.validate(req.body);
    if(result.error != null) {
        return res.json({message: 'validation failed',error: result.error})
    }
    next();
}