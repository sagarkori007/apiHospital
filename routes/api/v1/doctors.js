const express = require('express');
const router = express.Router();
const doctorController = require('./../../../controllers/api/v1/doctorsApi');

router.post('/register',doctorController.register); //completed 
router.post('/login',doctorController.createSession);//completed

module.exports = router;