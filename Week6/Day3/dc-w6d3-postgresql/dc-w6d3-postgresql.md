create table customers (
	customer_id serial primary key,
	name varchar(255) not null,
	member boolean not null
)

insert into customers (name, member)
values ('Steve', true), ('John', false), ('Daniel', true)

select * from customers

create table orders (
	order_id serial primary key,
	customer_id int not null,
	total int not null,
	store_id int not null,
	foreign key (customer_id) references customers(customer_id) on delete cascade,
	foreign key (store_id) references stores(store_id) on delete cascade
)

insert into orders (customer_id, total, store_id)
values (1, 349, 1), (2, 220, 2), (3, 450, 3)

select * from orders

create table stores (
	store_id serial primary key,
	name varchar(255) not null,
	country varchar(255),
	member_name varchar(255)
)

insert into stores (name, country, member_name)
values ('Store 1', 'Brazil', 'Daniel'), ('Store 2', 'United States', null), ('Store 3', 'Israel', 'Steve')

select * from customers inner join orders on customers.customer_id = orders.customer_id;
select * from customers left join stores on customers.name = stores.member_name where member_name is null;
select * from orders right join stores on orders.store_id = stores.store_id where stores.store_id is null
select * from customers full join stores on customers.name = stores.member_name 
where customers.member is false or stores.member_name is null