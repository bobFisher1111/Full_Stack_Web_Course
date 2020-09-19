/*
    - Create a package:
        - Documentation:
            - https://www.npmjs.com/
        - Go inside folder:
            - type in terminal:
                - npm init
                - give it a packageName or press enter if you like suggestion
                - follow commands
        
        - Install package:
            // this is superheroes package, that gives you random super hero names
            npm install superheroes
        - Once installed it will create a node_modules, with all the node_modules
*/ 
// import packages:
const superheroes = require('superheroes');
const supervillains = require('supervillains');

// generate a random superhero name and save as a var:
var mySuperHeroName = superheroes.random();
// generate a random supervillain name and save as a var:
var mySuperVillainsName = superheroes.random();
// log it to terminal:
console.log("My favorite superhero: " + mySuperHeroName + " fought my worse enemy: " + mySuperVillainsName);