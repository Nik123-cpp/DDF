const express = require('express')
const router = express.Router()
const profileController = require('../controller/profileController')

router.route('/:email_id').get(profileController.user_datails);
router.route('/register').post(profileController.register);

module.exports = router
