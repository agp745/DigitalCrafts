const list = document.querySelector(".recipes")

fetch('https://food2fork.ca/api/recipe/search/?page=2&query=beef', {
    method: "GET",
    headers: {
        'Authorization': 'Token 9c8b06d329136da358c2d00e76946b0111ce2c48',
    }
})
.then(response => response.json())
.then(recipes => {
    console.log(recipes)
})



