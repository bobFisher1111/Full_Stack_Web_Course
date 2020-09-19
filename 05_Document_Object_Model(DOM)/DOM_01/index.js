document.getElementsByTagName("li")[2].style.color = "green"; // change color of element 2, "Third"
alert("Number of li elements: " + document.getElementsByTagName("li").length);// get how many element give as alert
document.getElementsByClassName("btn")[0].style.color = "green"; // selecting class, must select with index, even if only one, give as an array
//document.getElementById("title").innerHTML = "Good Bye"; // Changes the title id text to good bye
/*
    Another way of doing it is using query:
        - This allows to put in element, class, or id. Unlike ways above
        - prefered way
        - If query matches multiple, it will grab first one
*/
// select element
document.querySelector("h1");
// select id
document.querySelector("#title");
// select class
document.querySelector(".btn");
// Combine selectors: this selects the li and a, hierachal
document.querySelector("li a");
// combining selectors in same element
document.querySelector("li.item");
// get list of items when using combining element
document.querySelectorAll("#list .item");
// Choose item from select all use index location
document.querySelectorAll("#list .item")[1].style.color="pink";
/*
    - Using Style correct way:
        - javascript & css for styling
*/
// Part 1: Add, maybe only need it for a certain point
document.querySelector("button").classList.add("invisiable"); // adding class to button that wasn't there
// Part 2: Remove, maybe only need it for a certain point
document.querySelector("button").classList.remove("invisiable"); // adding class to button that wasn't there
// Part 3: Toggle, if not applied, apply it, if applied then get rid of it, preffered way
//document.querySelector("button").classList.toggle("invisiable");
// Add class huge
document.querySelector("h1").classList.add("huge"); // adding clas huge too h1 element
// Modifying text with html
document.querySelector("h1").innerHTML = "<em>Goodbye</em>";
/*
    - Manipulating html elements attributes: 
        class, href, source, type, everything goes inside tag
*/
// Get a list of attributes to the tag
//document.querySelector("a").attributes;
// Retrieve attribute
//document.querySelector("a").getAnimations("href"); // get only href attribute
// Change attribute, takes in 2 parameters first the one you want to change and then change to
document.querySelector("a").setAttribute("href", "https://www.bing.com"); // changing from google to bing.com