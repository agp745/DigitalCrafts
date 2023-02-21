const firstNameInput = document.querySelector('#firstName')
const lastNameInput = document.querySelector('#lastName')
const subButton = document.querySelector('#submitButton')
const body = document.querySelector('body')

subButton.addEventListener('click', function() {
    const fName = firstNameInput.value
    const lName = lastNameInput.value
    const concat = `${fName}, ${lName}`

    let p = document.createElement('p')
    p.innerHTML = concat
    body.appendChild(p)
})