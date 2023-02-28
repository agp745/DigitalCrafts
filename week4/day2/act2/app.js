const title = document.querySelector('#title')
const symbol = document.querySelector('#symbol')
const price = document.querySelector('#price')
const quantity = document.querySelector('#quantity')
const submitBttn = document.querySelector('#submit')
const portfolio = document.querySelector('.stocks')

submitBttn.addEventListener('click', function() {

    const request = new XMLHttpRequest()
    request.open('POST','https://endurable-bead-polo.glitch.me/stocks')

    request.addEventListener('load', function() {
        console.log(this.response)
    })

    const body = {
        symbol: symbol.value,
        title: title.value,
        price: parseFloat(price.value),
        quantity: parseInt(quantity.value)
    }

    request.setRequestHeader('Content-Type', 'application/json')

    request.send(JSON.stringify(body))
})

function displayStocks() {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        const info = parsed.map((stock) => {
            return `
                <div class="stock">
                    <div>${stock.symbol}</div>
                    <div>${stock.title}</div>
                    <div>${stock.price}</div>
                    <div>${stock.quantity}</div>
                </div>
            `
        })
        portfolio.innerHTML += info.join("")
    })

    request.open('GET', 'https://endurable-bead-polo.glitch.me/stocks')
    request.send()
}

displayStocks()
