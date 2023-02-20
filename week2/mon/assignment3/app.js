function fizzBuzz(inputNum) {
  let num = parseInt(inputNum);

  if (num % 3 === 0 && num % 5 === 0) {
    window.alert("Fizz Buzz");
    return "Fizz Buzz";
  } else if (num % 3 === 0) {
    window.alert("Fizz");
    return "Fizz";
  } else if (num % 5 === 0) {
    window.alert("Buzz");
    return "Buzz";
  } else {
    window.alert("Not divisible by 3 or 5");
    return "Not divisible by 3 or 5";
  }
}

let inputNum = prompt("Input a number");
let answer = fizzBuzz(inputNum);

console.log(answer);
