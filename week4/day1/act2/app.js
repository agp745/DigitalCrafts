const button = document.querySelector('button')
const image = document.querySelector('img')

button.addEventListener('click', function() {
    const request = new XMLHttpRequest();

    request.addEventListener('load', function(){
        const parsed = JSON.parse(this.response)
        image.setAttribute('src', `${parsed.message}`)
    })

    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.send()
})
