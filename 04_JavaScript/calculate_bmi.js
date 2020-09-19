/*
    - Calculate BMI:
        - Formula:
                     weight(kg)
            BMI =   -------------
                    height^2(m^2)
        
        - 
*/
function bmiCalculator(weight, height){
    var bmi = 703 * (weight / (Math.pow(height, 2)));
    bmiRounded = Math.round(bmi);
    return console.log(bmiRounded);
}

bmiCalculator(145, 72);