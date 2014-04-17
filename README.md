# NoSQL Database

In a world full of imitators, be genuine.

The true NoSQL database.


    
To install:

    git clone https://github.com/maddenpj/NoSQL.git
    npm install control-port


To start:

    node NoSQL.js
    
To use:

    $ nc localhost 6000
    NoSQL> menu
    NoSQL <=> Console

      STORE  -  Store a key/value pair

      GET - Retrieve a value by key


    NoSQL> STORE a 2
    STORED: (a, 2)
    NoSQL> STORE customerid 293
    STORED: (customerid, 293)
    NoSQL> GET a
    2
    NoSQL> GET customerid
    293
    NoSQL> SELECT * FROM Employees
    NO!
    NoSQL> ALTER TABLE distributors ADD CONSTRAINT dist_id_zipcode_key UNIQUE (dist_id, zipcode);
    NO!
    NoSQL> DROP TABLE customers;
    NO!
