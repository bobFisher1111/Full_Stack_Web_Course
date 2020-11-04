/*
    - RESTful API Notes:

        - 2 most important rules on making api RESTful:
            - Use HTTP Request Verbs:
                - GET:
                    - Reading:
                        - app.get(function(req, res){
                        });
                - POST:
                    - Create: Like creating an entry in the database and save it for later
                        - app.post(function(req, res){
                        });
                - PUT:
                    - Update: the entire entry of like a database, replace previous one
                        - app.put(function(req, res){
                        });
                - PATCH:
                    - Update: only send piece of data that needs to be updated not the entire entry
                        - app.patch(function(req, res){
                        });
                - DELETE:
                    - Delete:
                        - app.delete(function(req, res){
                        });

            - Use specific Pattern of Routes/Endpoint URLs:
                - example:
                        api/cyclops-bff/private/2384/loans-analyst/pullback-aggregation

    - Creating Wikipedia like API:

        - Create Database with Robo 3T:
            - Graphical Interface for MongoDB
            - Download here:
                - https://robomongo.org/download

        - Create Wiki-API:
            - Create node.js
                - npm init -y
            - Standard packages:
                - npm i body-parser mongoose ejs express
            - Create app.js
            - Start application:
                - nodemon app.js
            - Connect to mongodb in app.js:
                - mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});
            - Create schema for collection:
                - const articleSchema = {
                    title: String,
                    content: String,
                }
            - Create model for the schema:
                - const Article = mongoose.model("Article", articleSchema);
                        
*/