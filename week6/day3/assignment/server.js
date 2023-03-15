const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(express.static('static'))

const PORT = 8080

global.moviesList = [{
    title: 'test',
    description: 'test description',
    genre: 'Action',
    posterURL: 'swag.com',
    id: 2333
}]

global.movieDetails = []

app.use('/movies', moviesRouter)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}/movies`)
})