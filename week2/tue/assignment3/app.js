function isPrime(inputNum) {
  let num = parseInt(inputNum);

  if (num === 1 || num === 2) {
    return "is prime";
  } else {
    let i = 2;
    while (i < num) {
      if (num % i === 0) {
        return "not prime";
      }
      i++;
    }
    return "is prime";
  }
}

let inputNum = prompt("input a number to check if it is prime: ");

let answer = isPrime(inputNum);
console.log(answer);
