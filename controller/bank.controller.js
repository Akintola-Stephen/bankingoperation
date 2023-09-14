const express = require("express")
const bankService = require("../service/bankService")

// An object that wraps in three functions
// A function for creating a user, another function to retirve a persons details
// And a function to retrieve all banks
const bankObj = {
    createBankProfile: async(req, res) => {
        try {
            const userObj = req.body;
            // Calling bank service create function to create users
            const user = await bankService.createUser(userObj)
            return res.status(200).json(user);

        } catch (err) {
            return res.status(500).json({ msg: err })
        }
    },

    retrieveUserDetails: async(req, res) => {
        const accountNumber = req.accountNumber;
        await bankService.retrieveDetails(accountNumber)
    },
    retrieveAllAccountDetails: async(req, res) => {

    }
}


module.exports = bankObj;