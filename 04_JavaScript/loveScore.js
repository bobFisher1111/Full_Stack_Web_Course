prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70)
    console.log("Your love score is " + loveScore + "%" + " You should get married");

if (loveScore > 30 && loveScore <=70)
    console.log("Your love score is " + loveScore + "%");

if (loveScore <=30)
    console.log("Your love score is " + loveScore + "%" + " Not a good match");

