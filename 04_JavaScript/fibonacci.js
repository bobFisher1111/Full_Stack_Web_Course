/*
    - Fibonacci Challenge:
        - number and number before create next number
            - example:
                0,1,1,2,3,5,8,13,21
                0 + 1 = 1
                1 + 1 = 2
                1 + 2 = 3
                2 + 3 = 5
*/
function fibanacciGenerator(n){

    // Create an empty array
    var output = [];

    // if n = 1 output 0
    if (n === 0){
        output = [0];
    }
    // if n = 2, output 0,1
    else if (n === 2){
        output = [0,1];
    }
    else{
        output = [0,1]
        // there are 2 existing items
        for (var i = 2; i < n; i++){
        // taking sum of the second last index value plus the last index value
            output.push(output[output.length - 2] + output[output.length - 1]); // [0,1,1]
        }
    }
    // Return an array of fibanacci numbers starting from 0.
    return console.log(output);
}
var n = 10;
fibanacciGenerator(n);