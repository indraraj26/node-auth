const router = require('express').Router();
const adminPanel = require('./admin-panel/auth/admin.routes');

router.use('/user', adminPanel);

module.exports = router;