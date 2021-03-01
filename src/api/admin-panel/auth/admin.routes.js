const router = require('express').Router();
const adminController = require('./admin.controller');
const adminValidator = require('./admin.validate');

router.post('/signup',adminValidator.signUpValidator, adminController.SignUp);
router.post('/signin',adminController.signIn);

module.exports = router;