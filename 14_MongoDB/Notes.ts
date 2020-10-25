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
                
        - Start MongoDB in terminal

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

            - Update Database
    */