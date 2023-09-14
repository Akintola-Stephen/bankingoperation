const express = require("express")
const router = express.Router()
const bankRoute = require("../controller/bank.controller")

router.post('/user', bankRoute.createBankProfile)
router.get('/retrieveUserDetails', bankRoute.retrieveUserDetails)
router.get('/retrieveAllAccountDetails', bankRoute.retrieveAllAccountDetails)


module.exports = router;