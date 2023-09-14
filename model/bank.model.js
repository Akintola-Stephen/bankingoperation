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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const bankModel = model("test", BankSchema)

module.exports = bankModel