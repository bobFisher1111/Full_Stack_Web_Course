/*
    - Fiz Buzz:
        - print number from 1 to 100
        - for multiple of 3 fizz instead of number 
        - for multiples of 5 print Buzz
        - for numbers which are multiples of 3 & 5 print FizzBuzz
*/
function fizzBuzz(){
    for (var count = 1; count < 101; count++){
        // for numbers which are multiples of 3 & 5 print FizzBuzz
        if (count % 3 === 0 && count % 5 === 0){
            console.log("FizzBuzz");
        }
        // for multiple of 3 fizz instead of number
        else if (count % 3 === 0){
            console.log("Fizz");
        }
        // for multiples of 5 print Buzz
        else if (count % 5 === 0){
            console.log("Buzz");
        }else{
            // Add a number that increase by 1 each time run function 
            console.log(count);
        }
    }   
}
fizzBuzz();