function factorialOf(inputNum) {
  let num = parseInt(inputNum);
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

let inputNum = prompt("enter a number to calculate its factorial");

let factorial = factorialOf(inputNum);

console.log(factorial);
