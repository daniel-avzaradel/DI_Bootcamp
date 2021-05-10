#### Bootcamp Database

##### Students table



create database bootcamp

create table students (
	students_id serial PRIMARY KEY,
	first_name VARCHAR(150) NOT NULL,
	last_name VARCHAR(150) NOT NULL,
	birth_date date not null
)

INSERT INTO students (first_name, last_name, birth_date)
	values ('Marc', 'Benichou', '1998-11-02'),
			('Yoan', 'Cohen', '2010-12-03'),
			('Lea', 'Benichou', '1987-07-27'),
			('Amelia', 'Dux', '1996-04-07'),
			('David', 'Grez', '2003-06-14'),
			('Omer', 'Simpson', '1980-10-03'),
			('Daniel', 'Avzaradel', '1988-10-21');

SELECT * FROM students <br/>
SELECT first_name FROM students <br/>
SELECT last_name FROM students <br/>
SELECT * FROM students where students_id = 2 <br/>
SELECT * FROM students where last_name = 'Benichou' AND first_name = 'Marc' <br/>
SELECT * FROM students where last_name = 'Benichou' OR first_name = 'Marc' <br/>
SELECT * FROM students where first_name LIKE '%a%' <br/>
SELECT * FROM students where first_name LIKE '%a' <br/>
SELECT * FROM students where first_name LIKE '%a_' <br/>
SELECT * FROM students where students_id = 1 OR students_id = 3 <br/>

SELECT * FROM students where birth_date between '2000-01-01' AND current_date
