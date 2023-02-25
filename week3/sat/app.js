//1 -------------------------------------------------
let numbers = [1,2,3,4,5,6,7,8,9,10]
function callback1(arr, callback){
    callback(arr)
}
function double(array){
    let newArr = array.map((x) => x * 2)
    console.log(newArr)
}
callback1(numbers, double)

//2 -------------------------------------------------
function callback2(num, callback){
    callback(num)
}
function square(number){
    let squared = number * number
    console.log(squared)
}
callback2(5, square)

//3 -------------------------------------------------
let values = [1,2,3,4,5,6,7,8,9,10]
function callback3(arr, callback){
    callback(arr)
}
function sumOfArr(array) {
    let sum = array.reduce((sum, currVal) => sum += currVal)
    console.log(sum)
}
callback3(values, sumOfArr)

//4 -------------------------------------------------
let sentence = 'Hello World! How art thou?'
function callback4(str, callback) {
    callback(str)
}
function reverseStr(string) {
    let reversedString = ''
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    console.log(reversedString)
}
callback4(sentence, reverseStr)

//5 -------------------------------------------------
let words = ['word', 'hello', 'hi', 'whatty', 'yerrr']
function callback5(strArr, callback){
    callback(strArr)
}
function uppercaseWords(arr) {
    let uppercased = arr.map((word) => word.toUpperCase())
    console.log(uppercased)
}
callback5(words, uppercaseWords)

//6 -------------------------------------------------
let moreNumbers = [1,2,3,4,5,6,7,8,9,10]
function callback6(arr, callback) {
    callback(arr)
}
function returnEvens(arr) {
    let evens = arr.filter((n) => n % 2 === 0)
    console.log(evens)
}
callback6(moreNumbers, returnEvens)

//7 -------------------------------------------------
let moreWords = ['word', 'hello', 'hi', 'whatty', 'yerrr', 'minecraft']
function callback7(arr, callback) {
    callback(arr)
}
function larger5(array) {
    let bigWords = array.filter((n) => n.length > 5)
    console.log(bigWords)
}
callback7(moreWords, larger5)

//8 -------------------------------------------------
let otherNumbers = [20, 33, 16, 25, 90, 231, 35]
function callback8(arr, callback) {
    callback(arr)
}
function squareRoot(array) {
    let sqrts = array.map((x) => Math.sqrt(x))
    console.log(sqrts)
}
callback8(otherNumbers, squareRoot)

//9 -------------------------------------------------
let otherWords = ['word', 'hello', 'hi', 'whatty', 'yerrr', 'minecraft']
function callback9(arr, callback) {
    callback(arr)
}
function lengthOfWord(array) {
    let lengths = array.map((n) => n.length)
    console.log(lengths)
}
callback9(otherWords, lengthOfWord)

//10 -------------------------------------------------
let evenMoreNumbers = [20, 33, 16, 25, 90, 231, 35]
function callback10(arr, callback) {
    callback(arr)
}
function biggestNum(array) {
    let biggest = array.reduce((biggest, curr) => Math.max(biggest, curr))
    console.log(biggest)
}
callback10(evenMoreNumbers, biggestNum)