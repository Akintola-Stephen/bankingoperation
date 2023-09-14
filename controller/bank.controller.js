const express = require("express")
const bankService = require("../service/bankService")
const functionDispatcher = require("../util/functionDispatcher")

/**
An object that wraps in three functions
     A function for creating a user, another function to retirve a persons details
     And a function to retrieve all banks
**/
const bankObj = {
    createBankProfile: async(req, res) => {
        try {
            const userObj = req.body;
            // Calling account number generation function written in util folder
            req.body.accountNumber = functionDispatcher.generateAccountNumber()
                // Calling bank service create function to create users
            const user = await bankService.createUser(userObj)
            return res.status(200).json(user);

        } catch (err) {
            return res.status(500).json({ msg: err })
        }
    },

    userBankDetails: async(req, res) => {
        try {
            const {
                accountNumber
            } = req.body;
            const user = await bankService.userBankDetails(accountNumber)
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ msg: err })
        }

    },
    accountBankDetails: async(req, res) => {
        try {
            const users = await bankService.accountBankDetails()
            return res.status(200).json({
                data: users,
                status: 'success'
            })
        } catch (err) {
            return res.status(500).json({ msg: err, status: 'failure' })
        }
    }
}


module.exports = bankObj;