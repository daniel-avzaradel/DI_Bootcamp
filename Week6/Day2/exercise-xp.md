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

select * from items ORDER BY price
select * from items where price >= 80 ORDER BY price DESC

select first_name, last_name from customers order by first_name limit 3 

select last_name from customers order by last_name desc

create table purchases (
	customers_id int references customers (customers_id),
	items_id int references items(items_id)
)

INSERT INTO purchases (customers_id)
values (2)


select * from purchases -- it works, but items_id = null --

select * from items

INSERT INTO purchases (customers_id, items_id)
values (1, 1),
		(2, 2),
		(3, 3),
		(1, 2),
		(1, 3)
		
select * from purchases -- is this information useful to us? Probably not <br/>
select * from purchases INNER JOIN customers ON (purchases.customers_id = customers.customers_id); <br/>
select * from purchases where customers_id = 4 <br/>
select * from purchases INNER JOIN items ON (purchases.items_id = items.items_id) where purchases.items_id = 1 or purchases.items_id = 2 <br/>

INSERT INTO items (name, price)
values ('hard drive', 500)

INSERT INTO purchases (customers_id, items_id)
values (3, 4)

select * from purchases inner join items on (purchases.items_id = items.items_id) <br/>

select first_name from purchases inner join customers on (purchases.customers_id = customers.customers_id) <br/>
select last_name from purchases inner join customers on (purchases.customers_id = customers.customers_id) <br/>
select name from items inner join purchases on items.items_id = purchases.items_id


-- EXERCISE 2 --