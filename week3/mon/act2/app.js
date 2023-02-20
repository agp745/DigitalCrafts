let redButton = document.getElementById('red')
let blueButton = document.getElementById('blue')

redButton.addEventListener('click', () => {
    document.body.style.background = 'red'
})

blueButton.addEventListener('click', () => {
    document.body.style.background = 'blue'
})