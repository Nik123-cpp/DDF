const express = require('express')
const requestController = require('../controller/requestController.js')
const router = express.Router()

router.use('/:req_id', requestController.get_request);

module.exports = router;