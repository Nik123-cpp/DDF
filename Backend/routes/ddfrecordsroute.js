const express = require('express');
const router = express.Router();
const ddfRecordsController = require('../controller/ddfrecordsController');
const { route } = require('./userroute');

router.route('/').get(ddfRecordsController.all_records);

module.exports = router;