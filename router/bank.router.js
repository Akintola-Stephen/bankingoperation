const express = require("express")
const router = express.Router()
const bankMiddleware = require("../middleware/validation.middleware")
const bankRoute = require("../controller/bank.controller")

router.post('/user/register', bankRoute.createBankProfile)
router.get('/userbankdetails', bankMiddleware.userExist, bankRoute.userBankDetails)
router.get('/bankdetails', bankRoute.accountBankDetails)


module.exports = router;