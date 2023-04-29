const express = require('express');
const router = express.Router();
const ddfRecordsController = require('../controller/ddfrecordsController');
const { route } = require('./userroute');

router.route('/all_transactions').get(ddfRecordsController.all_records);
router.route('/add_ddf').post(ddfRecordsController.Add_DDF);
router.route('/getbalance').get(ddfRecordsController.Get_Balance);

module.exports = router;