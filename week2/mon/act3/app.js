function totalCalc(price, tip) {
  let numPrice = parseFloat(price);
  let numTip = parseFloat(tip);
  let total = ((numTip / 100) * numPrice + numPrice).toFixed(2);
  window.alert(`Your total today is $${total}`);
  return total;
}
let price = prompt("Enter the price of your meal: ");
let tip = prompt("Enter your tip as percentage%: ");

console.log(totalCalc(price, tip));

//tipAmount = (tip/100) * price
//total == tipAmount + price
