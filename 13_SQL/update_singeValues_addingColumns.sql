/*
    - Updating Single Values and Adding Columns in SQL:
        - command line:
            - SOURCE C:\Users\BobTheFisher\Desktop\Projects\Full_Stack_Course\13_SQL\update_singleValues_.sql
*/
/* Update Statement single value */
UPDATE products
SET Price = 0.80
WHERE ID=2;

/* Adding Columns to table */
ALTER TABLE products
ADD Stock int;
