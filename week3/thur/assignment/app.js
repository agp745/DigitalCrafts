const newMovieTitle = document.querySelector('#movieTitle')
const newMovieYear = document.querySelector('#movieYear')
const newPosterURL = document.querySelector('#posterURL')
const addButton = document.querySelector('#addButton')
const movieList = document.querySelector('.movieList')

const moviesArr = movies.Search
function generateMovies() {
    movieList.innerHTML = ''

    const movieCard = moviesArr.map((movie) => {
        return `
            <section class="movieCard">
                <div class="movieTitle">${movie.Title}</div>
                <div class="movieYear">${movie.Year}</div>
                <img class="posterURL" src="${movie.Poster}">
                <button id="deleteButton">Delete</button>
            </section>
        `
    })
    movieList.innerHTML += movieCard.join('')

    const deleteButton = document.querySelectorAll('#deleteButton')
    deleteButton.forEach((button) => {
        button.addEventListener('click', deleteMovie)
    })
}

function addMovie() {
    let newMovie = {
        Title: `${newMovieTitle.value}`,
        Year: `${newMovieYear.value}`,
        Poster: `${newPosterURL.value}`
    }
    movies.Search.push(newMovie)

    generateMovies()
}

function deleteMovie() {
    let currentCard = this.parentNode
    currentCard.style.display = 'none'
}

generateMovies()
addButton.addEventListener('click', addMovie)