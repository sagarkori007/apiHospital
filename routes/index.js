const express = require('express');
const router = express.Router();

router.use('/',require('./api/v1/index'));

console.log('router loaded!!')
module.exports = router;