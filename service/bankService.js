const Bank = require("../model/bank.model")

const bankService = {
    createUser: async(user) => {
        return await Bank.create(user)
    },

    userBankDetails: async(accNumber) => {
        return Bank.find({ accountNumber: accNumber })
    },

    accountBankDetails: async() => {
        return Bank.find()
    }
}


module.exports = bankService