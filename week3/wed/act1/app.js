const time = document.querySelector('#time')
const startBttn = document.querySelector('#setTimer')
const timer = document.querySelector('.counterDiv')
const body = document.querySelector('body')


startBttn.addEventListener('click', function() {
    let seconds = time.value
    
    let countdown = window.setInterval(function() {
        timer.innerHTML = seconds
        seconds--
        if(seconds < 0){
            body.setAttribute('style', 'background-color: green')
            window.clearInterval(countdown)
        }
    }, 1000)
})