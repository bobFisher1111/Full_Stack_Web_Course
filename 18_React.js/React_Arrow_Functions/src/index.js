import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// Creating function map way:
const newNumberMap = numbers.map(function(x){
    return x * x;
});

// Create function with Arrow Function, allows you to remove word function and add =>
const newNumberArrowOne = numbers.map(x => { // with single input don't need parenthese but more than one u do like (x,y)
    return x * x;
});
// Also, if taking 1 parameter and depending what it does can remove return and make single line
const newNumberArrowOne = numbers.map(x => x * x);

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(x => x * 2); 

//Filter - Create a new array by keeping the items that return true.
const newNumbers = numbers.filter(num => num < 10); 

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.
const newNumber = numbers.find(num => num > 10); 

//FindIndex - find the index of the first item that matches.
const newNumber = numbers.findIndex(num => num > 10);

