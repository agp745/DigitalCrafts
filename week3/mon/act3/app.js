let imageURL = document.getElementById('urlInput')
let addImage = document.getElementById('submitButton')

addImage.addEventListener('click', () => {
    let newImage = document.createElement('img')
    newImage.setAttribute('src', `${imageURL}`)

    document.body.appendChild(newImage)
})



document.createElement('img')