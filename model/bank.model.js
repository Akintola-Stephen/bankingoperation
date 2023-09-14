const {
    Schema,
    model
} = require("mongoose");

const BankSchema = new Schema({
    accountName: {
        type: String,
        required: true,
        maxlength: 50
    },
    dob: {
        type: Date,
        require: true
    },
    balance: {
        type: Number,
        default: 0.0
    },
    accountNumber: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ['Savings', 'Checking', 'Current'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const bankModel = model("bank", BankSchema)

module.exports = bankModel