create table orders (
	order_id serial primary key,
	customer_name varchar(255) not null,
	total int not null
)

create table items (
	item_id serial primary key,
	name varchar(255) not null,
	price int not null,
	order_id int not null,
	foreign key(order_id) references orders(order_id) on delete cascade
)

