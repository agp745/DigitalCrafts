const postsList = document.getElementById('postsUl')

for(let i = 0; i < posts.length; i++) {
    const li = document.createElement('li')
    postsList.appendChild(li)

    const titleDiv = document.createElement('div')
    li.appendChild(titleDiv)
    titleDiv.setAttribute('style', 'font-weight: bold')
    titleDiv.setAttribute('style', 'font-size: 35px')
    const descDiv = document.createElement('div')
    descDiv.setAttribute('style', 'font-style: italic')
    li.appendChild(descDiv)

    titleDiv.innerHTML = posts[i].title
    descDiv.innerHTML = posts[i].body
}