### EXERCISE XP: MINI-PROJECT



-- 1. Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” 
-- from the employee table.

select first_name "First Name", last_name "Last Name" from employees

-- 2. Write a query to get unique departments ID from the employee table (ie. without duplicates).

select distinct department_id from employees

-- 3. Write a query to get the details of all employees from the employee table, do so in descending order by first name.

select * from employees order by first_name desc

-- 4. Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.

select first_name, last_name, salary, (15 * salary / 100) as pf from employees

-- 5. Write a query to get the employee IDs, names (first_name, last_name) and salary 
-- in ascending order according to their salary.

select employee_id e_id, first_name || ' ' || last_name as names, salary from employees order by salary

-- 6. Write a query to get the total sum of all salaries paid to the employees.

select sum(salary) as total_salaries from employees

-- 7. Write a query to get the maximum and minimum salaries paid to the employees.

select min(salary) min_salary, max(salary) max_salary from employees

-- 8. Write a query to get the average salary paid to the employees.

select AVG(salary) from employees

-- 9. Write a query to get the number of employees working in the company.

select count(*) from employees

-- 10. Write a query to get all the first names from the employees table in upper case.

select upper(first_name) from employees

-- 11. Write a query to get the first three characters of each first name of all the employees in the employees table.

select left(first_name, 3) from employees

-- 12. Write a query to get the full names of all the employees in the employees table. 
-- You have to include the first name and last name.

select first_name || ' ' || last_name as "full name" from employees

-- 13. Write a query to get the first name, last name and the length of the 
-- full name of all the employees from the employees table.

select first_name, last_name, length(first_name || ' ' || last_name) as "full name" from employees

-- 14. Write a query to check whether the first_name column of the employees table contains any numbers.

select regexp_matches(first_name, '\d+') from employees

-- 15. Write a query to select the first ten records from a table.

select * from employees limit 10


-- Restricting And Sorting
-- 1. Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.

select first_name, last_name, salary from employees where salary between 10000 and 15000

-- 2.Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.

select first_name, last_name, hire_date from employees where date_part('year', hire_date) = '1987'

-- 3. Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.

select first_name || ' ' || last_name as full_name from employees where first_name like '%c%' and first_name like '%e%'

-- 4. Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.

select last_name, job_title, salary from employees emp inner join jobs on emp.job_id = jobs.job_id 
where job_title != 'Programmer' and job_title != 'Shipping Clerk' and salary != 4500 and salary != 10000 and salary != 15000

-- 5. Write a query to display the last names of all employees whose last name contains exactly six characters.

select last_name from employees where length(last_name) = 6

-- 6. Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.

select last_name from employees where last_name like '__e%'

-- 7. Write a query to display the jobs/designations available in the employees table.

select distinct job_title from employees emp inner join jobs on emp.job_id = jobs.job_id 

-- 8. Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.

select * from employees where last_name like 'Jones' 
or last_name like 'Blake' or last_name like 'Scott'
or last_name like 'King' or last_name like 'Ford'