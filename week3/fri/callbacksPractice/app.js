//1 ----------------------------------------------
function delay(callback, delayTime) {
    setTimeout(callback, delayTime)
}

function message(){
    console.log('Hello World')
}

delay(message, 1000)


//2 ----------------------------------------------
function repeat(callback, repeatTime) {
    setInterval(callback, repeatTime)
}
function repeatMessage(){
    console.log('I repeat')
}
repeat(repeatMessage, 1000)


//3 ----------------------------------------------
let numbers = [1,2,3,4,5,6,7,8,9,10,11]

function filter(arr, callback) {
    callback(arr)
}
function filterArr(array) {
    let newArr = array.filter((n) => n % 2 === 0)
    console.log(newArr)
}
filter(numbers,filterArr)


//4 ----------------------------------------------
function map(arr, callback) {
    callback(arr)
}
function mapArr(array){
    let mappedArr = array.map((n) => n * 2)
    console.log(mappedArr)
}
map(numbers, mapArr)


//5 ----------------------------------------------
let values = [1,2,3,4,5,6,7,8,9,10,11]

function reduce(arr, callback, initial) {
    callback(arr, initial)
}
function reduceArr(array, initial) {
    // reduce((accumulator, currentValue) => { /* … */ }, initialValue)
    let combinedArray = array.reduce((combined, current) => combined += current, initial)
    console.log(combinedArray)
}
reduce(values, reduceArr, 1)