const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
// connect to database:
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});
// create schema for collection:
const articleSchema = {
    title: String,
    content: String,
}
// create model for schema:
const Article = mongoose.model("Article", articleSchema);

//


//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});