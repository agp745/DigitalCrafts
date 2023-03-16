const express = require('express')
const app = express()

const PORT = 8080

function reqHeader(req, res, next) {
    req.headers.username = "Alex Perez"
    console.log(req.headers)
    next()
}

app.use(reqHeader)

app.get('/', (req, res) => {
    const user = req.headers.username
    res.send(`Hello, ${user}`)
})

app.listen(PORT, (req, res) => {
    console.log(`now listening on http://localhost:${PORT}`)
})