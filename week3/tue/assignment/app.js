const menu = document.querySelector('menu')
const startersMenu = document.querySelector('#starters')
const entreesMenu = document.querySelector('#entrees')
const dessertsMenu = document.querySelector('#desserts')

const startersButton = document.querySelector('#startersButton')
const entreesButton = document.querySelector('#entreesButton')
const dessertsButton = document.querySelector('#dessertsButton')

function isChecked(menu) {
    if(this.checked){
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}
startersButton.addEventListener('change', () => isChecked.call(startersButton, startersMenu))
entreesButton.addEventListener('change', () => isChecked.call(entreesButton, entreesMenu))
dessertsButton.addEventListener('change', () => isChecked.call(dessertsButton, dessertsMenu))

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