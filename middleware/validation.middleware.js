const express = require("express")
const Bank = require("../model/bank.model")

const middlewareObj = {
    userExist: async(req, res, next) => {
        const { accountNumber } = req.body;
        const user = await Bank.findOne({ accountNumber })
        if (!user) {
            return res.status(409).json({ msg: `No user with account numner ${accountNumber} found` })
        }
        next()
    }
}



module.exports = middlewareObj;