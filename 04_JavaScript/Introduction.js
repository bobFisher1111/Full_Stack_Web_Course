/*
    - Introduction to JavaScript:.
        - Run locally in terminal
            - node javaScriptFileName.js
            
        - Documentation:
            https://developer.mozilla.org/en-US/docs/Web/JavaScript

        - Print hello world: (pop up in browser)
            alert("Hello World");
        
        - Print message and allow user to respond
            prompt("What is your name");

        - JavaScript Data Types:
            - Check data type:
                typeof()
            - Boolean:
                - true or false
            - Numbers: 
                1234
            - Strings:
                "Turtle loves to dance"

        - JavaScript Function:
            - Create a function:
                function functionNAme(){
                    ....
                    ....
                }
                
        - JavaScript Variables:
            - Create a variable: // var is only used when creating variable
                - var myVariable = "Message here";
            - Change value of variable: // do not need to place var in front just name of variable like so
                - myVariable = "New message"
            - Print variable to screen:
                - alert(myVariable);
            - User input saved to variable:
                var yourName = prompt("What is your name");
            - Print message with Variable:
                alert("Hi " + yourName + ", I hope you are having a good day" )
        - Console.log:
            - used for developers
            - syntax:
                console.log()

        - Random Number:
            - 16 digits between 0 to .9999999999999999
            - syntax:
                - var n = Math.random();
            - example:
                - get random dice roll 1 to six, how to do that
                var n = Math.random();
                n = n * 6;
                n = Math.floor(n) + 1;  // rounds down, add 1, so it will be 1 to 6 instead of 0 to 5    
                
        - Conditionals:
            - if & elfs:
            - syntax:
                if (track === "clear"){
                    goStraight();
                }
                else{
                    turnRight();
                }
        
        - Comparators:
            - is equal to:
                ===
            - is not equal to:
                !==
            - is greater than:
                >
            - is less than:
                <
            - is greater or equal to:\
                >=
            - is lesser or equal to:
                <=

        - Combining Comparators:
            - AND:
                &&
            - OR:
                ||
            - NOT:
                !

        - JavaScript Arrays:
            - Is a collection of items that are related
            - Create an array
            - sytnax:
                var family = ['Sean', 'Sarah', 'Josiah', 'Gabriel'];
            - Trieve from array:
                var father = family[0];
            - include() function
                faimly.includes("Sean"); // will return ture or false
            - push() function
                adds to end of array
            - pop() function
                takes last item in array
        
        - Control Statements:
            - While Loops:
                - syntax:
                    while (something is true){
                        // do Something
                    }
            - for loop:
                - syntax:
                    for (var i = 1; i <100; i++){
                        // do something
                    }
*/
// Get number of characters in a word:
var myWord = "Turtle";
myWord.length;

// Write a prompt that syas how many characters and how many remaining:
var tweet = alert("Compose your tweet: ");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have: " + (140 - tweetCount) + " Characters remaining");

// Slicing & Extracting Parts of String:
// grabbing first letter using slicing:
var name = "Sean";
name.slice(0,1); // does not include index location 1, it stopes before there. This is the difference

// Like example above, this time cut off at 140 characters:
var tweet = prompt("compose your tweet: ");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUndert140);

// toUpperCase()
var name = "Sean";
name = name.toLowerCase();
alert(name);

// toLowerCase()
var name = "Sean";
name = name.toLowerCase()
alert(name);

// Change lower case to uppercase for first character in name, incase user gives you lowercase
// 1. create var stores name that user ents in prompt
prompt("What is your name");

// 2. Capitalize the first letter of their name
// a. isolate the first char
var firstChar = name.slice(0,1); // take first character only

// b. turn the first char to upper case
var upperCaseFirstChar = firstChar.topUpperCase();

// c. isolate the rest of the name
var restOfName = name.slice(1, name.length);

// d. Change rest of name to lowercase
restOfNames = restOfName.toLowerCase();

// e. concatenate the first char with the rest of the char
var capitalizedName = upperCaseFirstChar + restOfName;

// 3. Use capitalized version of their name to greet them using alert
alert("Hello, " + capitalizedName);

// Basic Arithmetic & Modulo Operator:
// add
var b = 10+2;
// subtract
var c = 10-2;
// Modulo gives you the remainder
var e = 9 % 6;
// Dogage:
var dogAge = prompt("How old is your dog");
var humanAge = ((dogAge - 1) * 4) + 21;
alert("Your dog is " + humanAge + " yeas old in human years.");

// Increatement:
var x = 5;
x = x + 1;
// better way
x++;
// Decrement:
x--;
// Incremeant more than 1, 2 for example
x+=2;

// Function Part 1: Creating Functions & Calling Functions:
function functionName(){
    // some code....
}
// call function:
functionName();

// Function Part 2: Passing variable in function
function functionName2(parameter1){
    var varName = parameter1 * 1.5; 
    // do something
}
functionName(10); // calling function and giving parameter1 a value of 10

// Example: How many years, weeks days left to live until age
function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}
lifeInWeeks(34);

// Function Part 3: Output & Return Values
function getMilk(money){
    return money * 2.00;
}
getMilk(10);

