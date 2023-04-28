const express = require('express')
const router = express.Router()
const profileController = require('../controller/profileController')

router.route('/:email_id').get(profileController.user_datails);
router.route('/register').post(profileController.register);
router.route('/:email_id/changeusername').put(profileController.change_username);
router.route('/:email_id/changepassword').put(profileController.change_password);

module.exports = router
