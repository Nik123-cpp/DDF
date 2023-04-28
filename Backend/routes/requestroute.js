const express = require('express')
const requestController = require('../controller/requestController.js')
const router = express.Router()

router.route('/:req_id').get(requestController.get_request);
router.route('/delete/:req_id').delete(requestController.delete_request);

module.exports = router;