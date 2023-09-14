const express = require("express")
const dbConnection = require("./config/db")
require("dotenv").config();

const app = express()

const PORT = process.env.PORT || 5000

//establish connection to database
dbConnection()

app.get('/', (req, res) => {
    return res.json({ msg: `App running on PORT ${PORT}` })
})


app.listen(PORT)