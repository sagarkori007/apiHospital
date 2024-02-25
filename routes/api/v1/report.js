const express = require('express');
const router = express.Router();
const reportController = require('./../../../controllers/api/v1/reportApi');
const passport = require('passport');


router.get('/:status', passport.authenticate('jwt',{session: false}), reportController.listAllReports);// completed

module.exports = router;