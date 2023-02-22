const input = document.querySelector('#input')
const button = document.querySelector('#show')
const stockName = document.querySelector('#name')
const price = document.querySelector('#price')

let stockId = 0

button.addEventListener('click',() =>{
    window.clearInterval(stockId)

    const symbol = input.value
    stockName.innerHTML = symbol
    price.innerHTML = `$...`
    
    stockId = window.setInterval(() => {
        let stock = getStockQuote(symbol)
        stockName.innerHTML = stock.name
        price.innerHTML = `$${stock.price}`
    }, 2000)   
})


