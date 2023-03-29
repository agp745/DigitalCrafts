const movies = require("../models/movies")

const showMovies = async (req, res) => {
    res.render("index", { movies: movies })
}

const addMovie = async (req, res) => {
    const movie = {
        title: req.body.title,
        genre: req.body.genre,
    }

    movies.push(movie)
    res.redirect("/")
}

module.exports = { showMovies, addMovie }
