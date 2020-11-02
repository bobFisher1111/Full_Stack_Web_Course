const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// connect to mongoose database
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});
// create Schema:
const itemsSchema = {
  name: String
}
// Create the model based on Schema
const Item = mongoose.model("Item", itemsSchema);

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

app.get("/", function(req, res) {
  // access here the database to the list:
  // empty {}, will give all since not querying
  Item.find({}, function(err, x){
    // if empty database then create it, else render it
    if (x.length === 0){
      // InsertMany into the Item Collection:
      Item.insertMany(defaultItems, function(err){
        if (err){
          console.log(err);
        }else{
          console.log("Success, added defaultItems to the Item collection");
        }
      });
      // once created then it redirects back to home and loads it
      res.redirect("/");
    } else{
      res.render("list", {listTitle: "Today", newListItems: x});
    }
  });
});

/* 
  - Express Route Parameters:
    - app.get("/category:<paramName>", function(req, res){//Access req.params.paramName});
    - verify that that name doesn't already exist with:
      - Mogoose findOne() function
*/
// create schema for it
const listSchema = {
  name: String,
  items: [itemsSchema]
};
// create mongoose model
const List = mongoose.model("List", listSchema);
// creating the custome routes
app.get("/:customListName", function(req, res){
  const customListName = _.capitalize(req.params.customListName);
  List.findOne({name:customListName}, function(err, x){
    if (!err){
      if(!x){
        // Create a new list:
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      }else{
        // Show an existing list:
        res.render("list", {listTitle: x.name, newListItems: x.items});
      }
    }
  });
});

app.post("/", function(req, res){
  const itemName = req.body.newItem;
  const listName = req.body.list; // list is the name of the value of the button listTitle
  // mongoose create doc
  const item = new Item({
    name: itemName
  });
  // checks to see if when creating new item equals today if not, then it will use findOne and create it to that
  if (listName === "Today"){
    item.save();
    // show it, by rerouting back to home
    res.redirect("/");
  }else{
    List.findOne({name: listName}, function(err, x){
      x.items.push(item);
      x.save();
      res.redirect("/" + listName)
    })
  }
});

app.post("/delete", function(req, res){
  const checkedItemID = req.body.checkbox; // this will tap into the value of the id_ in mongo
  const listName = req.body.listName;

  if (listName === "Today"){
     // https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove , requires a callback 
    Item.findByIdAndRemove(checkedItemID, function(err){
      if (!err){
        console.log("Successfully deleted checked item.");
        res.redirect("/");
        // this will delete items other than Today list, using $pull operator & findOneAndUpdate()
      } 
    });
  } else {
    // https://docs.mongodb.com/manual/reference/operator/update/pull/
    // https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemID}}}, function(err, x){
      if (!err) {
        res.redirect("/" + listName);
      }
    });
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
