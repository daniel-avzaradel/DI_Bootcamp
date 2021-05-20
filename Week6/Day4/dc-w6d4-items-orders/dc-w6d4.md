create table items (
	item_id serial primary key,
	name varchar(255) not null,
	price int not null
)

insert into items (name, price)
values ('shirt', 20), ('socks', 5), ('jeans', 40)

create table orders (
	order_id int not null,
	item_id int references items(item_id) on delete cascade
)

insert into orders (order_id, item_id)
values (1, 2), (1, 2), (1, 3), (1, 1),
(2, 1), (2, 3), (3, 1)

select * from items
select * from orders

select sum(price) total from orders inner join items on orders.item_id = items.item_id where order_id = 1