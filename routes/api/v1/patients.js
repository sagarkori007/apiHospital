const express = require('express');
const router = express.Router();
const patientController = require('./../../../controllers/api/v1/patientApi');


router.post('/register',patientController.register); //completed
router.get('/:id/create_report',patientController.createReport); //completed
router.get('/:id/all_reports',patientController.listReports);//completed

module.exports = router;