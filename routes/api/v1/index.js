const express = require('express');
const router = express.Router();

router.use('/',require('./doctors'));
router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));
router.use('/reports',require('./report'));


module.exports = router;
