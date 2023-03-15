const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

let moviesArr = []

app.get('/', (req, res) => {
    res.render('index', {arr: moviesArr})
})

app.get('/:genre/:year', (req, res) => {
    const genre = req.params.genre
    const year = req.params.year

    const movie = {movieGenre: genre, movieYear: year}
    moviesArr.push(movie)
    res.redirect('/')
})

app.listen(8080, () => {
    console.log('listening on http://localhost:8080')
})