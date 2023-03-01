const list = document.querySelector('.orders')
const email = document.querySelector('#email')
const type = document.querySelector('#type')
const size = document.querySelector('#dropdown')
const price = document.querySelector('#price')
const button = document.querySelector('#button')

function showOrders(){
    fetch('https://troubled-peaceful-hell.glitch.me/orders')
    .then(response => response.json())
    .then(orders => {
    console.log(orders)
    const order = orders.map((drink) => {
        return `
        <div>${drink.email}</div>
        <div>${drink.type}</div>
        <div>${drink.size}</div>
        <div>${drink.price}</div>
        `
    })
    list.innerHTML = order.join('')
})
}

function postOrder() {
    const data =  {
        email: email.value,
        type: type.value,
        size: size.value,
        price: parseFloat(price.value)
    }


    fetch('https://troubled-peaceful-hell.glitch.me/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    list.innerHTML = ''
    showOrders()
}

showOrders()
button.addEventListener('click', postOrder)