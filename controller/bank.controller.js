const express = require("express")
const bankService = require("../service/bankService")

// An object that wraps in three functions
// A function for creating a user, another function to retirve a persons details
// And a function to retrieve all banks
const bankObj = {
    createBankProfile: async(req, res) => {
        const { userObj } = req.body;
        await bankService.createUser(userObj)
    },

    retrieveUserDetails: async(req, res) => {
        const accountNumber = req.accountNumber;
        await bankService.retrieveDetails(accountNumber)
    },
    retrieveAllAccountDetails: async(req, res) => {

    }
}


module.exports = bankObj;