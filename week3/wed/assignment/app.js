const newsfeed = document.querySelector('.newsfeed')
const articles = news.articles
const dropdown = document.querySelector('#sources')

const sourcesArr = sources.sources
const sourcesIds = sourcesArr.map((source) => source.id)
const newsSourceId = articles.map((article) => article.source.id)
const matchedIds = sourcesIds.filter((ids) => newsSourceId.includes(ids))
const filteredSources = sourcesArr.filter((source) => matchedIds.includes(source.id))

const sourceNames = filteredSources.map((source) => {
    return `<option>${source.name}</option>`
})  
dropdown.innerHTML += sourceNames

function generateNews(filteredArticles){
    newsfeed.innerHTML = ""

    const feed = filteredArticles.map((article) => {
        return `
        <section class="newsCard">
            <p class="author">${article.author}</p>
            <h1 class="title">${article.title}</h1>
            <img src="${article.urlToImage}" class="articleImage">
            <p class="description">${article.description}</p>
            <div class="articleURL">${article.url}</div>
            <p class="published">${article.publishedAt}</p>
        </section>
        `
    })
    newsfeed.innerHTML += feed.join('')
}

function filterSources(){
    if(this.value === '') {
        return generateNews(articles)
    }
    const filteredArticles = articles.filter((article) => {
        return article.source.name === this.value
    })
    generateNews(filteredArticles)
}

generateNews(articles);

dropdown.addEventListener('change', filterSources);