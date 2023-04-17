const express = require('express');
const router = express.Router();
const pendingrequestController = require('../controller/PendingrequestController');

router.route('/committee').get(pendingrequestController.requested_requests);
router.route('/hod').get(pendingrequestController.verified_requests);
router.route('/faculty/:email_id').get(pendingrequestController.my_requests);

module.exports = router;

