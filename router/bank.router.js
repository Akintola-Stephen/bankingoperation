const express = require("express")
const router = express.Router()
const bankRoute = require("../controller/bank.controller")

router.post('/user', bankRoute.createBankProfile)
router.get('/fetchUserProfile', bankRoute.fetchSingleBank)
router.get('/fetchAllBanks', bankRoute.fetchAllBanks)


module.exports = router;