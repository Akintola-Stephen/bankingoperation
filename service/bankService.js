const Bank = require("../model/bank.model")

const bankService = {
    createUser: async(user) => {
        return await Bank.create(user)
    },

    retrieveUserDetails: async(accountNumber) => {
        return Bank.find({ accountName })
    },

    retrieveAllAccountDetails: async() => {
        return Bank.find()
    }
}