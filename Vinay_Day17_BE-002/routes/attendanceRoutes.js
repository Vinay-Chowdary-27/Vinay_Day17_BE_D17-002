const express = require('express');
const router = express.Router();

const attendanceController =
require('../controllers/attendanceController');

router.get('/filter',
attendanceController.getAttendance);

module.exports = router;