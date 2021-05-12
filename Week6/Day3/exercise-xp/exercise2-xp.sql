-- EXERCISE 2: DVD RENTAL

-- 1.

select * from film order by film_id
select * from film
update film set language_id = 3 where film_id = 1 or film_id = 2

-- 2.

-- customer_address_id is a foreign key

select * from customer order by customer_id

-- 3.

drop table customer_review -- the table was dropped without any problems.

-- 4.

select * from rental where return_date IS NULL

-- 5. 

select distinct film_id, title, description, rental_rate, return_date from film 
inner join rental on film_id = film.film_id 
where return_date is null 
order by rental_rate 
desc limit 30

-- 6.
-- a. The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

select * from actor inner join film_actor on actor.actor_id = film_actor.actor_id
inner join film on film.film_id = film_actor.film_id where first_name = 'Penelope' and last_name = 'Monroe'
and film.description like '%Sumo%'

-- b. The 2nd film : A short documentary (less than 1 hour long), rated “R”.

select * from category inner join film_category on category.category_id = film_category.category_id
inner join film on film.film_id = film_category.film_id
where film_category.category_id = 6 and film.rating = 'R' and length < 60


-- c.The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.

select * from customer where first_name = 'Matthew' and last_name = 'Mahan'

select * from customer inner join rental on rental.customer_id = customer.customer_id
inner join inventory on rental.inventory_id = inventory.inventory_id 
inner join film on film.film_id = inventory.film_id
where customer.customer_id = 323 and return_date between '2005-07-28' and '2005-08-01' and rental_rate > 4

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or 
-- description, and it looked like it was a very expensive DVD to replace.

select * from film 

select * from customer inner join rental on customer.customer_id = rental.customer_id
inner join inventory on inventory.inventory_id = rental.inventory_id 
inner join film on inventory.film_id = film.film_id
where film.title like '%boat%' or film.description ilike '%boat%'
and customer.customer_id = 323 
order by film.replacement_cost desc
limit 1
