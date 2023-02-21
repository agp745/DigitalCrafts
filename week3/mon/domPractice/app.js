//Q1
const redButton = document.querySelector('#redButton')
const blueButton = document.querySelector('#blueButton')
const body = document.querySelector('body')

redButton.addEventListener('click', function() {
    redButton.setAttribute('style', 'color: red')
    body.setAttribute('style', 'background: red')  
})

blueButton.addEventListener('click', function() {
    blueButton.setAttribute('style', 'color: blue')
    body.setAttribute('style', 'background: blue') 
})


//Q2
const newText = document.createElement('p')
newText.innerHTML = 'yoooo'
body.appendChild(newText)

//Q3
const imageButton = document.createElement('button')
imageButton.innerHTML = 'Click to Generate Photo'
const randomImage = document.createElement('img')
body.appendChild(imageButton)
body.appendChild(randomImage)

imageButton.addEventListener('click', function() {
    randomImage.setAttribute('src', 'https://picsum.photos/200/300')
})

//Q4
function addLI() {
    
}