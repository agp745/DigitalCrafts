const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const PORT = 8080

app.use(express.urlencoded())

app.post('/encrypt', async (req, res) => {
    const password = req.body.secret
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const object = {value: hashedPassword}

    console.log(JSON.stringify(object))
    res.json(object)
})


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})