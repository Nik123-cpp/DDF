const express = require('express')
const usercontroller = require('../controller/usercontroller.js')
const router = express.Router()


router.route("/:email_id").get(usercontroller.user_details)

router.route("/:email_id/change_username/:name").put(usercontroller.change_username)

// router.route("/Register").post(usercontroller.Register)

module.exports = router