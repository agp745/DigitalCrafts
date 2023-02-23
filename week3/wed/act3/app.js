const slideshow = document.querySelector('.slideshow')
const images = document.querySelectorAll('img')

for(let j = 1; j < images.length; j++){
    images[j].style.display = 'none'
}

images[0].style.display = 'block'

let i = 0
function generatePic(){
    images[i].style.display = 'none'
    i++
    if(i >= images.length){
        i = 0
    }
    images[i].style.display = 'block'
}

setInterval(generatePic, 500)