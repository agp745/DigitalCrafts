const allOrders = document.querySelector('.allOrders')
const emailOrder = document.querySelector('.emailOrder')
const email = document.querySelector('#email')
const type = document.querySelector('#type')
const size = document.querySelector('#size')
const price = document.querySelector('#price')
const submitBttn = document.querySelector('#submitBttn')
const searchInput = document.querySelector('#search')
const searchButton = document.querySelector('#searchBttn')
const deleteInput = document.querySelector('#delete')
const deleteButton = document.querySelector('#deleteBttn')

function showAllOrders() {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        const order = parsed.map((items) => {
            return `
                <div class="order">
                    <div>${items.email}</div>
                    <div>${items.type}</div>
                    <div>${items.size}</div>
                    <div>$${items.price}</div>
                </div>
            `
        })
        allOrders.innerHTML += order.join("")
    })

    request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/`)
    request.send()
}

function createOrder() {
    const request = new XMLHttpRequest()
    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')

    request.addEventListener('load', function() {
        console.log(this.response)
    })

    const body = {
        email: email.value,
        type: type.value,
        size: size.value,
        price: parseFloat(price.value)
    }
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body))
}

function getByEmail() {
    const request = new XMLHttpRequest()
    
    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        console.log(parsed)
        const oneOrder = `
            <h1>${parsed.email}'s order</h1>
            <div>${parsed.type}</div>
            <div>${parsed.size}</div>
            <div>${parsed.price}</div>
        `
        emailOrder.innerHTML += oneOrder
    })
    
    const userEmail = searchInput.value

    request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${userEmail}`)
    request.send()
}

function deleteByEmail() {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function(){
        console.log(this.response)
    })

    const userEmail = deleteInput.value

    request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${userEmail}`)
    request.send()
}

showAllOrders()
submitBttn.addEventListener('click', createOrder)
searchButton.addEventListener('click', getByEmail)
deleteButton.addEventListener('click', deleteByEmail)
