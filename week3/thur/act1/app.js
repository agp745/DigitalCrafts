const sildeshow = document.querySelector('.slideshow')
const images = document.querySelectorAll('img')

for(let i = 1; i < images.length; i++){
    images[i].style.display = 'none'
}
images[0].style.display = 'block'

let i = 0
function showImages(){
    
    images[i].style.display = 'none'
    i++
    if(i >= images.length) {
        i = 0
    }
    images[i].style.display = 'block'
}

setInterval(showImages,1000)

