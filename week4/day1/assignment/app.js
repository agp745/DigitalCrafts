const list = document.querySelector('.list')
const card = document.querySelector('.card')

function generateList() {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        const moviesArr = parsed.Search 
        let movie = moviesArr.map((n) => {
            return `
            <div class="movieCard">
                <a onclick="generateCard('${n.imdbID}')">
                <img src="${n.Poster}" class="poster">
                <p class="movieTitle">${n.Title}</p>
                </a>
            </div>
            `
        })
        list.innerHTML += movie
    })
    request.open('GET', 'https://www.omdbapi.com/?s=justice+league&apikey=445a3d95')
    request.send()
}

function generateCard(imdbID) {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        
        const movie = `
        <div class="bigCard">
            <div class="main">
                <h1 class="bigTitle">${parsed.Title}</h1>
                <img src="${parsed.Poster} class="bigPoster">
            </div>
            <div class="info">
                <p>Year: ${parsed.Year}</p>
                <p>Rated: ${parsed.Rated}</p>
                <p>Released: ${parsed.Released}</p>
                <p>${parsed.Director}</p>
            </div>
        </div>
        `;
        card.innerHTML = movie
    })
    let id = imdbID
    request.open('GET', `https://www.omdbapi.com/?i=${id}&apikey=445a3d95`)
    request.send()
}

generateList()



