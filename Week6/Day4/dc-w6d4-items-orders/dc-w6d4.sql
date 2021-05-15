create table orders (
	order_id serial primary key,
	customer_name varchar(255) not null,
	total int not null
)

create table items (
	item_id serial primary key,
	price int
)