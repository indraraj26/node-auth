const router = require('express').Router();
const adminController = require('./admin.controller');
const adminValidator = require('./admin.validate');

const checkUser = [require('../../auth/auth').decodeToken, require('../../auth/auth').verifyAdminUser]

router.param('id', adminController.params);

router.post('/signup',adminValidator.signUpValidator, adminController.SignUp);
router.post('/signin',adminValidator.signInValidator, adminController.signIn);
router.get('/getMe', checkUser, adminController.getMe);

module.exports = router;