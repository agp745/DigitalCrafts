const menu = document.querySelector('#menu')

function random(product) {
    return product.images.map(img => {
        return `<img src="${img}" />`
    })
}

fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(items => {
    console.log(items)
    const item = items.map((i) => {
        return `
            <h1>${i.title}</h1>
            <div>${i.description}</div>
            ${random(i)}
        `
    })
    menu.innerHTML += item.join('')
})