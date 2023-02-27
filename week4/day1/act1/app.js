const factsList = document.querySelector('.list')

const request = new XMLHttpRequest()

request.addEventListener('load', function() {
    const factsParsed = JSON.parse(this.response)
    const facts = factsParsed.map((f) => {
        return `<li>${f.fact}</li>`
    })
    factsList.innerHTML = facts.join('')
})

request.open('GET', 'https://island-bramble.glitch.me/dog-facts')
request.send()