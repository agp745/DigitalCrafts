function isEven(inputNum) {
  let num = parseInt(inputNum);
  if (num % 2 === 0) {
    window.alert("even");
    return "even";
  } else {
    window.alert("odd");
    return "odd";
  }
}

let inputNum = prompt("input a number");

let answer = isEven(inputNum);
console.log(answer);
