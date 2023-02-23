const newMovieTitle = document.querySelector('#movieTitle')
const newMovieYear = document.querySelector('#movieYear')
const newPosterURL = document.querySelector('#posterURL')
const addButton = document.querySelector('#addButton')
const movieList = document.querySelector('.movieList')

let moviesArr = movies.Search
function generateMovies() {
    movieList.innerHTML = ''

    const movieCard = moviesArr.map((movie) => {
        return `
            <section class="movieCard">
                <div class="movieTitle">${movie.Title}</div>
                <div class="movieYear">${movie.Year}</div>
                <img class="posterURL" src="${movie.Poster}">
                <button onclick="deleteMovie('${movie.Title}')" id="deleteButton">Delete</button>
            </section>
        `
    })
    movieList.innerHTML += movieCard.join('')
}

function addMovie() {
    let newMovie = {
        Title: `${newMovieTitle.value}`,
        Year: `${newMovieYear.value}`,
        Poster: `${newPosterURL.value}`
    }
    moviesArr.unshift(newMovie)

    generateMovies()
}

function deleteMovie(movie) {
    let filteredMovies = moviesArr.filter((item) => (item.Title !== movie))
    moviesArr = filteredMovies
    generateMovies()
}

generateMovies()
addButton.addEventListener('click', addMovie)