const newsfeed = document.querySelector('.newsfeed')

async function getID() {

    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const idArr = await response.json()
    idArr.map((id) => getStory(id))
}

async function getStory(storyID) {

    const id = storyID
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    const article = await response.json()

    const date = new Date(article.time * 1000)
    const story = ` 
        <section class="wrapper">
        <h1 class="title">${article.title}</h1>
        <a href="${article.url}" target="_blank">${article.url}</a>
        <div class="by">${article.by}</div>
        <div class="date">${date.toLocaleDateString("en-US")}</div>
        </section>
    `

    newsfeed.innerHTML += story
}

getID()