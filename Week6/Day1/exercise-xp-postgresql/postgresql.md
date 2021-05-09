### DATABASE POSTGRESQL: Public.

#### Tables: Items, Customers

create table items (
	items_id serial PRIMARY KEY,
	name varchar(100) not null,
	price numeric not null	
);

INSERT INTO items (name, price)
values ('Large Desk', 300),
		('Small Desk', 100),
		('Fan', 80);
		

create table customers (
	customers_id serial PRIMARY KEY,
	first_name varchar(100) not null,
	last_name varchar(100) not null
);

INSERT INTO customers (first_name, last_name)
values ('Greg', 'Jones'),
		('Sandra', 'Jones'),
		('Scott', 'Scott'),
		('Trevor', 'Green'),
		('Melanie', 'Johnson');



SELECT * FROM items;
SELECT * FROM items where price > 80;
SELECT * FROM items where price < 300;
SELECT * FROM customers where first_name LIKE 'Smith'
SELECT * FROM customers where last_name LIKE 'Jones'
SELECT * FROM customers where first_name not LIKE 'Scott'