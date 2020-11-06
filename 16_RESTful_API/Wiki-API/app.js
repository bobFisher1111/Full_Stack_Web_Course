const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
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

// RESTful GET: get all articles
app.get("/get_articles", function(req, res){
    Article.find(function(err, x){
        if (!err){
            res.send(x);
        }else{
            res.send(err);
        }
    });
});

// RESTful Post: create to collection articles
app.post("/post_articles", function(req, res){
    // Store new article named newArticle
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    // saving to database, use this to send a callback function and state that everything is ok to the browser or failed
    newArticle.save(function(err){
        if (!err){
            res.send("Successfully added a new article.");
        }else{
            sessionStorage.send(err);
        }
    });
});

// RESTful Delete: Delete all articles in the collection, or can modify to only delete certain article not all
app.delete("/delete_articles", function(req, res){
    Article.deleteMany(function(err){
        if (!err){
            res.send("Successfully deleted all articles.");
        }else{
            res.send(err);
        }
    });
});

/*
    - Another way is using Chained Route Handlers using express: Basic
        - Allows get, post, delete to be under same endpoint as articles by chained routing
        - Documentation:
        - https://expressjs.com/en/guide/routing.html
*/
app.route("/articles")
    .get(function(req, res){
        Article.find(function(err, x){
            if (!err){
                res.send(x);
            }else{
                res.send(err);
            }
        });
    })

    .post(function(req, res){
        // Store new article named newArticle
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        // saving to database, use this to send a callback function and state that everything is ok to the browser or failed
        newArticle.save(function(err){
            if (!err){
                res.send("Successfully added a new article.");
            }else{
                sessionStorage.send(err);
            }
        });
    })

    .delete(function(req, res){
        Article.deleteMany(function(err){
            if (!err){
                res.send("Successfully deleted all articles.");
            }else{
                res.send(err);
            }
        });
    });

/*
    - Request targeting specific article: using chained routing
        - using : infront of articleTitle lets use articleTitle as dummy for what we place there will populate what we are looking for, must query
*/
app.route("/articles/:articleTitle") 
    // use findOne method from mongoose
    .get(function(req, res){
        Article.findOne({title: req.params.articleTitle}, function(err, x){
            if (x){
                res.send(x);
            }else{
                res.send("No Article matching that title was found.");
            }
        });
    })
    // use findOneAndUpdate method from mongoose, will only replace what you put in there, one from video was not working
    // postman: http://localhost:3000/articles/Jack%20Bauer  // %20 is for space
    .put(function(req, res){
        Article.findOneAndUpdate(
            {title: req.params.articleTitle},// this is the condition
            {title: req.body.title, content: req.body.content}, // this is the info update/put, body part of postman
            {useFindAndModify:false},
            function(err){
                if(!err){
                    res.send("Successfully updated articles.");
                }
            }
        );
    })
    // not sure if findOneAndUpdate will work, one from video is no longer in service
    .patch(function(req, res){
        Article.findOneAndUpdate(
            {title: req.params.articleTitle},
            {$set: req.body}, // by selecting body, it lets the user choose which one
            {useFindAndModify:false},
            function(err){
                if(!err){
                    res.send("Successffully updated articles");
                }else{
                    res.send(err);
                }
            }
        );
    })
    // deleteOne method from mongoose
    .delete(function(req, res){
        Article.deleteOne(
            {title: req.params.articleTitle},
            function(err){
                if (!err){
                    res.send("Successfully deleted the corresponding articles.");
                }else{
                    res.send(err);
                }
            }
        )
    });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});