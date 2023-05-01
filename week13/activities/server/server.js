const express = require('express')
const cors = require ('cors')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors())
app.use(express.json())

const users = [
    {username: 'agp', password: 'agp'}
]

const books = [
    {book1: 'hello'},
    {book2: 'world'}
]

app.get('/token', (req, res) => {
    const token = jwt.sign("swag", "SECRETKEY")
    res.json({token: token})
})

app.post('/login', (req, res) => {
    const user = users.find((user) => user.username === req.body.username && user.password === req.body.password)

    if (user) {
        const token = jwt.sign(req.body.username, 'secret_key')
        res.json({success: true, token: token})
    } else {
        res.json({error: 'user not found'})
    }
})

app.listen(8080, () => {
    console.log(`server running on http://localhost:8080`)
})