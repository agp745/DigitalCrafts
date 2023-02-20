function addNums(a, b) {
  let result = a + b;
  console.log(result);
  return result;
}

function subNums(a, b) {
  let result = a - b;
  console.log(result);
  return result;
}

function multNums(a, b) {
  let result = a * b;
  console.log(result);
  return result;
}

function divNums(a, b) {
  let result = a / b;
  console.log(result);
  return result;
}

function doMath(inputA, inputB, operand) {
  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  if (operand === "plus" || operand === "+") {
    addNums(a, b);
  } else if (operand === "minus" || operand === "-") {
    subNums(a, b);
  } else if (operand === "times" || operand === "*") {
    multNums(a, b);
  } else if (operand === "divide by" || operand === "/") {
    divNums(a, b);
  } else {
    return "input error";
  }
}

let inputA = prompt("Input your first number");
let operand = prompt(
  "choose the operation you whish to use: + (plus), - (minus), * (times), / (divided by)"
);
let inputB = prompt("Input your second number");

doMath(inputA, inputB, operand);
