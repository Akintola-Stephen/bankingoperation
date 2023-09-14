const express = require("express")
const router = express.Router()
const bankMiddleware = require("../middleware/validation.middleware")
const bankRoute = require("../controller/bank.controller")

router.post('/user', bankRoute.createBankProfile)
router.get('/userbankdetails', bankMiddleware.userExist, bankRoute.retrieveUserDetails)
router.get('/bankdetaiils', bankRoute.retrieveAllAccountDetails)


module.exports = router;