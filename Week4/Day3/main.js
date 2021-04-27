// // EXERCISE 1: ANALYZING
// // Analyze these pieces of code before executing them. What will be the outputs ?

// // ------1------ // 

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ----> output: ['bread', "carrot", "potato", 'chicken', "apple", "orange", ]

// // ------2------ //

const country = "USA";
console.log([...country]); // ----> output: ['U', 'S', 'A']

// // ------Bonus------ //

let newArray = [...[,,]];
console.log(newArray); // ----> output: [ undefined, undefined ]


// EXERCISE 2: EMPLOYEES
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)


let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const sayHello = users.map(item => "Hello, " + item["firstName"])
console.log(sayHello)


// // Using the filter() method, congratulate only the Full Stack Residents.

const fullstack = users.filter(item => item['role'] === 'Full Stack Resident')
let congrat = fullstack.map(item => "Congratulations, " + item["firstName"])
console.log(congrat)


// // EXERCISE 3: STAR WARS //
// // Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let str = epic.reduce((total, item) => total = total + item);
console.log(str)


// Exercise 4 : Employees #2
// Use the filter() method to congratulate the students that passed the course.

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = student.filter(item => item["isPassed"] === true);
let congrats = passed.map(item => "Congratulations, " + item['name'])
console.log(congrats)
