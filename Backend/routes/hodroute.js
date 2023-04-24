const express = require('express');
const router = express.Router();
const hodController = require('../controller/hodController');

router.route('/approve/:request_id').put(hodController.approve);
router.route('/reject/:request_id').put(hodController.approve);


module.exports = router;