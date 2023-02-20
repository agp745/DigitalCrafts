let inputFirst = prompt('Enter your first name');
let inputLast = prompt('Enter your last name');

let user = {
    firstName: inputFirst,
    lastName: inputLast
}

let greeting = `My name is ${user.lastName}, ${user.firstName}`;
console.log(greeting);

