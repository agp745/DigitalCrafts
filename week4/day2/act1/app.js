const button = document.querySelector('button')
const factHolder = document.querySelector('.fact')

button.addEventListener('click', function() {
    const request = new XMLHttpRequest()
    request.addEventListener('load', function() {
    const parsed = JSON.parse(this.response)
    factHolder.innerHTML = parsed.data
    })
    request.open('GET', 'http://meowfacts.herokuapp.com/')
    request.send()
})