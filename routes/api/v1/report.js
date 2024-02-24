const express = require('express');
const router = express.Router();
const reportController = require('./../../../controllers/api/v1/reportApi');


router.get('/:status',reportController.listAllReports);// completed

module.exports = router;