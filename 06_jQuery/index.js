/*
    - JQuery Popular Libary for JavaScript:
        - Simplies javascript code:
            - Link to hosted libraries:
                https://developers.google.com/speed/libraries#jquery
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            - Example: 
                    document.querySelector("h1"); = $("h1"); 
        - Minify Code:
            - Gets rid of unwanted space for javaScript & css. Make file size smaller and means faster
            - site to use to minify:
                https://www.minifier.org/
        - Selecting Elements with jQuery:
            - jQuery will select all ("whatsInside")
*/
// target h1 change its css color to red
//$("h1").css("color", "red"); // if have 1 value your getting, if 2 then seting

// add class to h1 in jquery with multiple classes:
//$("h1").addClass("big-title margin-50");
// remove class:
//$("h1").removeClass("big-title margin-50");

// manipulating text with jQuery:
//$("h1").text("Bye"); // changing hello to good bye

// Using html  to em tag,  emphasized text on button:
$("button").html("<em>Click Me</em>");

// Manipulate Attributes: attribues are images, webaddress, etc, we will use "src" attribute, change image
$("img").attr("src", "turtle.jpg");

// Manipulate Attributes: a tag, direct people to a different website
$("a").attr("href", "https://www.yahoo.com");

// Get a list of classes in h1
//$("h1"),attr("class");

// Adding Event Listener with jQuery to h1
$("h1").click(function(){
    $("h1").css("color", "purple");
});

// Adding Event Listener with jQuery to all the buttons, no need for for loop and everything else
$("button").click(function(){
    $("button").css("color", "purple"); // when button click all will turn purple
    $("h1").css("color", "purple"); // when button click h1 will turn purple
});

// detecting keystorkes inside box
$("input").keydown(function(event){
    console.log(event.key); // whenever a key is press it will log it in the console
});

// detecting keystorkes entire document
$(document).keydown(function(event){
    console.log(event.key); // whenever a key is press it will log it in the console
    $("h1").text(event.key); // change the text of h1 to what key is being pressed
});

// detect for mouse over on using on, change text to gold
$("h1").on("mouseover", function(){
    $("h1").css("color", "gold");
});

// Add jQuery to add new elements to html from jQuery, use before, creating button before h1 tag
$("h1").before("<button>New</button>");

// Add jQuery to add new elements to html from jQuery, use after, creating button after img tag
$("img").after("<button>New</button>");

// Add jQuery to add new elements to html from jQuery, use prepend, creating button before inside tag selected
$("h1").prepend("<button>New</button>");

// Add jQuery to add new elements to html from jQuery, use append, creating button after inside tag selected
$("h1").append("<button>New</button>");

/*
    - Animations Section:
/*
// remove elements
//$("button").remove(); // this will get rid of all buttons
// Creating animations: hide
$("button").on("click", function(){
    $("h1").hide(); // hides selected element
});
// Creating animations: show
$("button").on("click", function(){
    $("h1").show(); // shows selected element
});
// Creating animations: toggle
$("button").on("click", function(){
    $("h1").toggle(); // toggle selected element
});
// Creating animations: fade
$("button").on("click", function(){
    $("h1").fade(); // fade selected element
});
// Creating animations: fadeIn
$("button").on("click", function(){
    $("h1").fadeIn(); // fade in selected element
});
// Creating animations: fade toggle
$("button").on("click", function(){
    $("h1").fadeToggle(); // fade toggle selected element
});
// Creating animations: slide up , collapses element
$("button").on("click", function(){
    $("h1").slideUp(); // slide up selected element
});
// Creating animations: slide down, collapses down element
$("button").on("click", function(){
    $("h1").slideDown(); // slide down selected element
});
// Creating animations: slide toggle, collapses up and down element
$("button").on("click", function(){
    $("h1").slideToggle(); // slide toggle selected element
});
// custom animation: has to stick to things with numeric value, not like strings with colors
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5}); // Makes element more transparent
    $("h1").animate({margin: "20%"}); // giving it margin of 20% margin, makes it bigger
});
*/
// Chain multiple animations together
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5}); // does it in order since targeting same element h1
});