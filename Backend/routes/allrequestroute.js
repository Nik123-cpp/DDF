const express = require('express');
const router = express.Router();
const AllrequestController = require('../controller/AllrequestController');

router.route('/').get(AllrequestController.all_request);
router.route('/public').get(AllrequestController.public_request);
router.route('/personal/:email_id').get(AllrequestController.faculty_all_request);
router.route('/myrequests/:email_id').get(AllrequestController.faculty_my_requests);


module.exports = router;
