//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// connect to mongoose database
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});
// create Schema:
const itemsScema = {
  name: String
}
// Create the model based on Schema
const Item = mongoose.model("Item", itemsScema);

const item1 = new Item({
  name: "Welcome to your todolist!"
});
const item2 = new Item({
  name: "Hit the + button to add a new item."
});
const item3 = new Item({
  name: "<------- Hit this to delete an item."
});
// Create an array of the Item
const defaultItems = [item1, item2, item3];
// InsertMany into the Item Collection:
Item.insertMany(defaultItems, function(err){
  if (err){
    console.log(err);
  }else{
    console.log("Success, added defaultItems to the Item collection");
  }
});

app.get("/", function(req, res) {
  res.render("list", {listTitle: "Today", newListItems: items});
});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
