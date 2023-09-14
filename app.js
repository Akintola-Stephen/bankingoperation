const express = require("express")
const dbConnection = require("./config/db")
const bankRoute = require("./router/bank.router")
const cors = require('cors')
require("dotenv").config();

// Enabled CORS support
app.use(cors())

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use('/api', bankRoute)

//establish connection to database
dbConnection()

app.get('/', (req, res) => {
    return res.json({ msg: `App running on PORT ${PORT}` })
})


app.listen(PORT)