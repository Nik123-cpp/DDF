const express = require('express');
const router = express.Router();
const hodController = require('../controller/hodController');
const ddfcontroller = require('../controller/ddfcontroller');
router.route('/approve/:request_id').put(hodController.approve);
router.route('/reject/:request_id').put(hodController.approve);
router.route('/ddf/updatebalance').post(ddfcontroller.ddf_UpdateBalance);
router.route('/ddf/getbalance').get(ddfcontroller.ddf_GetBalance);

module.exports = router;