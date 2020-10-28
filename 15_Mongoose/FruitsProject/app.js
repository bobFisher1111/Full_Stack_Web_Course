// accuire mongoose
const mongoose = require('mongoose');

// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true}); // at the end give the name of the database

// Create new Schema: blue print / structure of our data
const fruitSchema = new mongoose.Schema({
    // adding valdiation to name and making it required
    name: {
        type: String,
        required: [true, "Must give it a name"]
    },
    // adding validation to rating, like filters like 1 to 10 and so on
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// Create a model / collection from the schema:
// first parameter is name you want to give the collection
// second parameter is the schema created
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create data for the Fruit Collection:
const fruit = new Fruit({
    name: "Mangos",
    rating: 8,
    review: "Pretty solid as a fruit"
});

// Save the fruits into Fruits model that is saved into the fruitsDB, comment out or it will save to db each time app.js ran
//fruit.save();

// Create new Schema for Person Collection:
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Create Person Collection:
const Person = mongoose.model("Person", personSchema);

// Create data for the Person Collection
const person = new Person({
    name: "Sean",
    age: 34
});
// saving person to database
//person.save();

// Saving multiple data to Collection at once: also include logging errors
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
});
const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour for me"
});
const banana = new Fruit({
    name: "banana",
    rating: 3,
    review: "Weird texture"
});
/* Commented out so it doesn't insert the 3 more inserts into the collection
Fruit.insertMany([kiwi, orange, banana], function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});
*/


// Reading from database, not querying anything
Fruit.find(function(err, x){
    if (err){
        console.log(err);
    }else{
        //console.log(x);
        // printing out the names in the fruits in the collection
        x.forEach(function(y){
            console.log(y.name);
        });
    }
    // close connection when done
    mongoose.connection.close();
});

// Update data using mongoose:

// Delete data using mongoose:

