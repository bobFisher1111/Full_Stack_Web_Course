/*
    - Who's Buying Lunch:
        - Create a function select random name from a list, person selected should pay for lunch 
*/
// Create list of names
function whosPaying(names){
    // Get the length of number of people
    var numberOfPeople = names.length;
    // Create random number to pick from and round it down
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return console.log(randomPerson + " is going to buy lunch today");
}
var names = ["Sean", "Sarah", "Josiah", "Gabriel"];
whosPaying(names);
