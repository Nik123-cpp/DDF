const express = require('express');
const router = express.Router();
const committeeController = require('../controller/committeeController');

router.route('/verify/:request_id').put(committeeController.verify);

module.exports = router;