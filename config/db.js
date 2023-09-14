const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB_URI

const connectToMongo = async() => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToMongo;