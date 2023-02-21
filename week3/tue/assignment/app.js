const menu = document.querySelector('menu')
const startersMenu = document.querySelector('#starters')
const entreesMenu = document.querySelector('#entrees')
const dessertsMenu = document.querySelector('#desserts')

const startersButton = document.querySelector('#startersButton')
const entreesButton = document.querySelector('#entreesButton')
const dessertsButton = document.querySelector('#dessertsButton')


startersButton.addEventListener('change', function() {
    if(this.checked){
        startersMenu.setAttribute('style', 'display: block')
    } else {
        startersMenu.setAttribute('style', 'display: none')
    }
})

entreesButton.addEventListener('change', function() {
    if(this.checked){
        entreesMenu.setAttribute('style', 'display: block')
    } else {
        entreesMenu.setAttribute('style', 'display: none')
    }
})

dessertsButton.addEventListener('change', function() {
     if(this.checked){
        dessertsMenu.setAttribute('style', 'display: block')
    } else {
        dessertsMenu.setAttribute('style', 'display: none')
    }
})



const startersDishes = dishes.filter((dishes) => dishes.course === "Starters")
const starter = startersDishes.map((dish) => {
    return `
    <div class="item">
        <img src="${dish.imageURL}" class="image"/>
        <div class="tnd">
            <div class="dish-title">${dish.title}</div>
            <p class="description">${dish.description}</p>
        </div>
        <div class="price">$${dish.price}</div>
    </div>
    `
})
startersMenu.innerHTML += starter.join('')

const entreesDishes = dishes.filter((dishes) => dishes.course === "Entrees")
console.log(entreesDishes)
const entree = entreesDishes.map((dish) => {
    return `
    <div class="item">
        <img src="${dish.imageURL}" class="image"/>
        <div class="tnd">
            <div class="dish-title">${dish.title}</div>
            <p class="description">${dish.description}</p>
        </div>
        <div class="price">$${dish.price}</div>
    </div>
    `
})
entreesMenu.innerHTML += entree.join('')

const dessertsDishes = dishes.filter((dishes) => dishes.course === "Desserts")
const dessert = dessertsDishes.map((dish) => {
    return `
    <div class="item">
        <img src="${dish.imageURL}" class="image"/>
        <div class="tnd">
            <div class="dish-title">${dish.title}</div>
            <p class="description">${dish.description}</p>
        </div>
        <div class="price">$${dish.price}</div>
    </div>
    `
})
dessertsMenu.innerHTML += dessert.join('')