const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use('/trips', tripsRouter)

app.listen(8080, () => {
    console.log('now listening on http://localhost:8080')
})