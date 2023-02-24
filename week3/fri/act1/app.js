const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    console.log('submit fired')
    event.preventDefault()
})