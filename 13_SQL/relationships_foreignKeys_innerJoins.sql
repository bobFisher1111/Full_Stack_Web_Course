/*
    - Relationship, Foreign Keys, Inner Joins:
        - command line:
            - SOURCE C:\Users\BobTheFisher\Desktop\Projects\Full_Stack_Course\13_SQL\relationships_foreignKeys_innerJoins.sql
*/
/* Create new table orders with foreign key */
CREATE TABLE orders(
    ID int not null,
    Order_Number int,
    Customer_ID int,
    Product_ID int,
    PRIMARY KEY (ID),
    /* Foreign Keys, references to table with column */
    FOREIGN KEY (Customer_ID) REFERENCES customers(ID),
    FOREIGN KEY (Product_ID) REFERENCES products(ID)
);

/* Adding data to the orders table */
INSERT INTO orders
VALUES (1, 4362, 2, 1);

/* Inner Join orders table with products table */
SELECT orders.Order_Number, products.Product_Name, products.Price, products.Stock
FROM orders
INNER JOIN products ON orders.Product_ID = products.ID;