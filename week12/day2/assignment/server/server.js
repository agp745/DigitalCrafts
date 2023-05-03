const express = require('express')
const app = express()
const cors = require('cors')
const appRouter = require('./routes/appRouter')
const authRouter = require('./routes/authRouter')
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.use(appRouter)
app.use(authRouter)

const port = process.env.PORT
const dev = process.env.DEV_SERVER

app.listen(port, () => {
    console.log(`listening on ${dev}${port}`)
})
