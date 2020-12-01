import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array., passing a function inside another function
// this function will double the numbers
function double(x){
    return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers)

//Filter - Create a new array by keeping the items that return true.
function greaterThanTen(x){
    return x > 10;
}
const greater_than_ten = numbers.filter(greaterThanTen);
console.log(greater_than_ten)

//Reduce - Accumulate a value by doing something to each item in an array.
// this will sum up all numbers in the array
function sumUpAllNumbers(accumulator, currentNumber){
    // accumulator is what position its at, starts at 0 and 1,2,3 ...
    return accumulator + currentNumber;
}
var addUp = numbers.reduce(sumUpAllNumbers);
console.log(addUp)

//Find - find the first item that matches from an array. Stops onces it's true, does not continue
function findValueFirst(num){
    return num > 10;
}
var findFirstValue = numbers.find(findValueFirst);
console.log(findFirstValue);

//FindIndex - find the index of the first item that matches. Returns Index location value instead actual value
function findValueFirstIndex(num){
    return num > 10;
}
var findFirstValueIndex = numbers.findIndex(findValueFirstIndex);
console.log(findFirstValueIndex);

// From emojipedia.js file, get the "meaning" and truncate it for no more than 100 characters: Use map function
function emojiEntryMeaning(x){
    return x.meaning.substring(0, 100);
}
const NewEmoji = emojipedia.map(emojiEntryMeaning);
console.log(NewEmoji);
