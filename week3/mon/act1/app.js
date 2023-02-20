let firstName = document.getElementById('firstNameBox')
let lastName = document.getElementById('lastNameBox')
let concatButton = document.getElementById('submitButton')
let fullNameHeader = document.getElementById('fullName')

concatButton.addEventListener('click', () => {
    fullNameHeader.innerHTML = `${firstName.value} ${lastName.value}`
})

let a = document.getElementById('firstNum')
let b = document.getElementById('secondNum')
let addButton = document.getElementById('add')
let sumHeading = document.getElementById('sum')

addButton.addEventListener('click', () => {
    sumHeading.innerHTML = a.value + b.value
})
