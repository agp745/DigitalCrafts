const express = require('express')
const app = express()
const cors = require('cors')
const appRouter = require('./routes/appRouter')
const authRouter = require('./routes/authRouter')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.use(appRouter)
app.use(authRouter)

app.listen(8080, () => {
    console.log(`listening on http://localhost:8080`)
})