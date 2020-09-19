/*
    - Song number of beers on wall:
        - Use while loop
*/
var numberOfBottles = 99

function bottlesOnWall(){
    while (numberOfBottles >=99){
        var bottleWord = "bottle";
        if (numberOfBottles === 1){
            bottleWord = "bottles";
        }
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
}
bottlesOnWall();

