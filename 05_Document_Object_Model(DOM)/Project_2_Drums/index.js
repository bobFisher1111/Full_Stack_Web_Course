/*
    - Higher Order Function:
        - Functions that can take other functions as inputs
        - Using the operator function: Calculator
            - it is a place holder for you to put function you want
*/
// Normal Function:
function add(num1, num2){
    return num1 + num2;
}
// Normal Function:
function subtract(num1, num2){
    return num1 - num2;
}
// Normal Function:
function multiply(num1, num2){
    return num1 * num2;
}
// Normal Function:
function divide(num1, num2){
    return num1 / num2;
}
// Operator Function:
function calculator(num1, num2, operator){
    return operator(num1, num2);
}

/*
    - Create JavaScript Object:
        - Example: bellboy
            var bellBoy1 = {
                name: "Timmy",
                age: 19,
                hasWorkPermit: true,
                languages: ["French", "English"]
            }
*/
/*
    - Constructor Function:
        - function name has to be capitialized: BellBoy
        - this name. will equal name being passed for this object
        - Example:
            function BellBoy (name, age, hasWorkPermit, languages){
                this.name = name;
                this.age = age;
                this.hasWorkPermit = hasWorkPermit;
                this.languages = languages
                // anonymous function
                this.moveSuitcase = function(){
                    alert("May I take your suitcase?");
                    pickUpSuitcase();
                    move();
                }
            }
    - Initialise Constructor Object:
        var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
    - Call the method inside the constructor
        bellBoy1.moveSuitcase();
*/
/*
    - callback:
        function antherAddEventListener(typeOfEvent, callback){
            // detects event code....
            var eventThatHappend = {
                eventType: "keydown",
                key: "p";,
                durationOfKeypress: 2
            }
            if (eventThatHappend.eventType === typeOfEvent){
                callback(eventThatHappend);
            }
        }
    - Calling the function
        antherAddEventListener("keydown", function(event){
            // this will print out what event had happend from keydown
            console.log(event);
        });



/*================================== Now Code for Project ================================*/
/*
    - Detecting Button Press Section: 
*/
// Get number of buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// Loop through the number of buttons with for loop:
for (var i = 0; i < numberOfDrumButtons; i++){
    // click first button and function will appear, click is a method inside the event listener
    // passing function as input to be called at later time, do not addd parthenese to handleClick function
    document.querySelectorAll(".drum")[i].addEventListener("click", clickSound); 
}
/* 
    - Create way for images to appear and sound and for button presses
        - Sound doc:
            // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
*/
// Create function for when button is clicked, plays a sound
function clickSound(){
    // figure out what button to match with sound: use "this", to select index its at
    //this.style.color = "white";

    // Create Switch statement for the pressing of the keys: 
    // Create variable hold value of the button to press
    var buttonInnerHTML = this.innerHTML;

    // call the makesound with button press function
    makeSound(buttonInnerHTML);

    // For button animation
    buttonAnimation(buttonInnerHTML);
}


/*
    - Detecting Keyboard Press Section:
*/
// Make sound when 
function keyboardSound(){
    makeSound(event.key);
    buttonAnimation(event.key);
}
// Add keypress to make sound to the dom, so its waiting
document.addEventListener("keydown", keyboardSound);
/*
    - Another way of doing, combing keyboardSound into anonymous function
document.addEventListener("keydown", function(event){
    makeSound(event.key);
});
*/

/*
    - Make sound with switch case, either press key or button
*/
// Create function called makeSound()
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        // like else statement in if statement, a button other than those
        default: 
            console.log(buttonInnerHTML);
    }
}

/*
    - Animation flashes Section:
        - Whenever push button or press key
*/
function buttonAnimation(currentKey){
    // use querySelector
    var activeButton = document.querySelector("." + currentKey); // must add . infront of current key because of css class
    // add press class in css to the button
    activeButton.classList.add("pressed");
    // use timeout function to make turn on and off, use anonymous function
    setTimeout(function(){
        activeButton.classList.remove("pressed");
        }, 100);
}