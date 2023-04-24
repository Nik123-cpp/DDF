const express = require('express');
const router = express.Router();
const committeeController = require('../controller/committeeController');

router.route('/verify/:request_id').put(committeeController.verify);
router.route('/deny/:request_id').put(committeeController.deny);


module.exports = router;