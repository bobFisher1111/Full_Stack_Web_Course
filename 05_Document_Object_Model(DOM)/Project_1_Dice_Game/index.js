// need number btween 1 to 6, its 0.99 to 5.99, round down and then add 1: to give 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// select dice 1 to dice 6 randomly
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// select the elemnet from the dom, using all because there are more than one
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1); // for player one, index 0
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); // for player one, index 1

// Select the winner
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draws";
}