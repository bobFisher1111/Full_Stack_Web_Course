/*
    - MongoDB:
        - Installing & Setup:

            - download linke: MongoDB Community Server:
                https://www.mongodb.com/try/download/community
            
            - Data Directory: 
                - Where it will be installed:
                    C:\Program Files\MongoDB\Server\4.4\data\

            - Create folder in C: drive to hold data:
                - C:\data\db

            - Installing:
                https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514

            - Check to verify if it works:
                - mongo --version
                
        - Start MongoDB in terminal:

            - Start mongodb server:
                - Command:
                    - mongod
            - Use mongo shell:
                - Create new tab in terminal:
                - Command:
                    - mongo

            - Show databases:
                - Command:
                    show dbs
                - by default comes with 3 databases: They are empty
                    - admin 
                    - config
                    - local
            - Find out what Database currently in:
                - Command:
                    - db

        - CRUD for MongoDB:

            - Create MongoDB or to Use it if already made
                - Command:
                    - use databaseNameYouWantToCreate
                - Example:
                    - Command:
                        - use shopDB

            - Create Collection for MongoDB:
                - Collection is similar to a RDBMS table:
                - See Collections(Like tables)
                    - Command:
                        - show collections
                - Insert Data:
                    - Insert One:
                        - db.collection.insertOne()
                        - Example: products collection name
                            - db.products.insertOne({
                                _id: 1,
                                name: "Pen",
                                price: 1.20
                            })
                    - Insert Many:
                        - db.collection.insertMany() 
                        - Example: products collection name
                            - db.products.insertMany()
            
            - Read data stored in database:
                - Docks on Query:
                    https://docs.mongodb.com/manual/reference/operator/query/
                - Command: // empty will show all
                    - db.collections.find(
                        query, // Optional, 
                        projection // Optional,
                    )

                - Examples of Querying:
                    - Simple query return name = Pencil
                        - Command:
                            - db.products.find({name: "Pencil"})
                    - Return where price is greater than 1 dollar
                        - Command:
                            - db.products.find({price: {$gt: 1}}) // $gt stands for greater than

                - Examples of Projections:
                    - returns only what you want not the whole row, the fields want back
                    - Query id = 1 but only return name=1
                        - db.products.find({_id: 1}, {name: 1, _id: 0}) // set _id as false with 0 or by default will return

            - Update Data in Database:
                - Example select _id 1 and update table with $set to add stock to it
                        - db.products.updateOne({_id: 1}, {$set: {stock: 32}})

            - Delete Data in Database:
                - 2 methods of deleting in a database:
                    - db.collection.deleteOne()
                    - db.collection.deleteMany()
                - Example delete _id = 2 from collection:
                    - db.products.deleteOne({_id: 2})

        - Establishing Relationships in MongoDB:
            - Two ways of doing this:
                1. One to Many (Preffered Way Usually)
                        db.products.insert(
	                        {
	                            _id: 3,
                                name: "Final Fantasy VIII",
                                price: 49.99,
                                stock: 12,
                                reviews: [ 
                                    {
                                        authorName: "Bob",
                                        rating: 100,
                                        review: "Best Final Fantasy Ever!!!!"
                                    },
                                    {
                                        authorName: "Sarah",
                                        rating: 95,
                                        review: "Tied as best Final Fantasy along with Final Fantasy VII"
                                    }
                            ]}
                        )
                2. Having multiple collections with and one collection will include id 1 & 2:
                    {
                        _id: 1,
                        name: "Pen",
                        price: 1.20,
                        stock: 32
                    }
                    {
                        _id: 2,
                        name: "Pencil",
                        price: 0.80,
                        stock: 12
                    }
                    {
                        orderedNumber: 3243,
                        productsOrdered [1,2]
                    }

        - Connect MongoDB to Node:
            - 2 Ways:
                - Native:
                    - Long way of doing it
                    - https://docs.mongodb.com/drivers/
                - Mongoose:
                    - Using a module making it more simple        
*/