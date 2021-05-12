-- EXERCISE XP

select * from language

select title, description, name from film left outer join language on film.language_id = language.language_id
select title, description, name from film full join language on film.language_id = language.language_id

create table new_film (
	film_id serial PRIMARY KEY,
	name varchar(255)
)

INSERT INTO new_film (name)
values ('The Last Samurai'),
		('Amadeus'),
		('Watchmen')
		
create table customer_review (
	review_id serial not null primary key,
	film_id integer references new_film(film_id) ON delete cascade,
	language_id integer references language(language_id) on delete cascade,
	title text,
	score int,
	review_text text,
	last_update timestamp default now()
)

select * from film

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
values (1, 1, 'The Last Samurai', 9.2, 'review text here'),
(2, 1, 'Amadeus', 10, 'review text here'),
(3, 1, 'Watchmen', 9.0, 'review text here')

select * from customer_review
select * from new_film

delete from new_film where film_id = 3

select * from customer_review -- the movie is removed from this table as well.