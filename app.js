const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    return res.json({ msg: `App running on PORT ${PORT}` })
})


app.listen(PORT)