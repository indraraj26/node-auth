const router = require('express').Router();
const adminController = require('./admin.controller');

router.post('/signup',adminController.SignUp);
router.post('/signin',adminController.signIn);

module.exports = router;