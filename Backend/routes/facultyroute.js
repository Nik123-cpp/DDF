const express = require('express');
const router = express.Router();
const facultyController = require('../controller/facultyController');

router.route('/create_request').post(facultyController.create_request);

module.exports = router;