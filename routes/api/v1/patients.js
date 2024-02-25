const express = require('express');
const router = express.Router();
const patientController = require('./../../../controllers/api/v1/patientApi');
const passport = require('passport');


router.post('/register', passport.authenticate('jwt',{session: false}),patientController.register); //completed
router.get('/:id/create_report', passport.authenticate('jwt',{session: false}),patientController.createReport); //completed
router.get('/:id/all_reports', passport.authenticate('jwt',{session: false}),patientController.listReports);//completed

module.exports = router;