#### EXERCISE 2



select * from customer
select first_name || ' ' || last_name as full_name from customer

select distinct create_date from customer

select * from customer order by first_name desc

select film_id, title, description, release_year, rental_rate from film order by rental_rate

select address, phone from address where district = 'Texas'

select * from film where film_id = 15 or film_id = 150

select * from film where title = 'The Last Samurai'
select film_id, title, description, length, rental_rate from film where title LIKE 'Th%'

select * from film order by rental_rate limit 10

select * from film order by rental_rate limit 10 offset 10

select amount, payment_date from customer inner join payment on payment.customer_id = customer.customer_id

select * from city inner join country on city.country_id = country.country_id