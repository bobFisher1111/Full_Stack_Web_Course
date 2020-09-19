/*
    - Leap Year:
*/
function leapYear(year){
    // Every year that evenly disible by 4
    if (year % 4 === 0){
        // Except every year that is evenly disible by 100
        if (year % 100 === 0){
            // unless the year is also evenly disible by 400
            if (year % 400 === 0){
                return console.log("It's a Leap Year");
            }else{
                return console.log("Not a leap year");
            }
            
        }else{
            return console.log("Leap Year");
        }

    }else{
        console.log("Not a leap year");
    }    
}

leapYear(1999)