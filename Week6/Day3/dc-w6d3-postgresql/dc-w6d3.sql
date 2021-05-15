create table section (
	section_id serial primary key,
	section_name varchar(255) not null
);

create table brand (
	brand_id serial primary key,
	brand_name varchar(255) not null,
	brand_country varchar(255) not null,
	section_id int,
	foreign key (section_id)
	references section(section_id) on delete cascade
);

create table instruments (
	instrument_id serial primary key,
	name varchar(255) not null,
	brand_id int,
	section_id int,
	foreign key (brand_id)
	references brand (brand_id) on delete cascade,
	foreign key (section_id)
	references section (section_id) on delete cascade
);

insert into instruments (name, brand_id, section_id)
values ('Violin', 1, 1),
('French Horn', 5, 2), ('Flute', 8, 3), ('Timpani', null, 4)

insert into section (section_name)
values ('strings'), ('brasses'), ('woodwinds'), ('percussions')

insert into brand (brand_name, brand_country, section_id)
values ('stentor', 'UK', 1), ('mendini', 'USA', 1), ('cecilio', 'Italy', 1), ('fiddlerman', 'China', 1)
values ('alexander', 'Germany', 2), ('Schmid', 'Germany', 2), ('yamaha', 'Japan', 2)
values ('yamaha', 'Japan', 3), ('gemeinhardt', 'Germany', 3), ('buffet', 'France', 3)

select * from brand order by brand_id

select * from instruments left join section on instruments.section_id = section.section_id