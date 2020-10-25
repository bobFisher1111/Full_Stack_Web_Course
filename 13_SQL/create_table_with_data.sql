/*
    - Create table and store data:
        - Online Tool to test:
            https://sqliteonline.com/
            
        - command line:
            - SOURCE C:\Users\BobTheFisher\Desktop\Projects\Full_Stack_Course\13_SQL\create_table_with_data.sql
*/
/* Create product table */
CREATE TABLE products (
    ID int not null, /* Makes sure id is not null when creating */
    Product_Name varchar(255),
    Price money,
    primary key (ID) /* Making id the PRIMARY KEY */
);

/* Add data to the table, if you have all data for each columns */
INSERT INTO products VALUES (1,"Pen", 2); 

/* Add data to the table, with missing columns */
INSERT INTO products (ID, Product_name) VALUES (2,"Pencil");
