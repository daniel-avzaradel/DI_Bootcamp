// EXERCISE 1: LOCATION
// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//output --> I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// EXERCISE 2: Display Student Info

// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.

// The function should return a string as seen in the example below.

// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik'`

function displayStudentInfo(studentObject) {
    const {first, last} = studentObject;
    console.log (`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'})


// Exercise 3: User & Id
// Using this object 

const users = { user1: 18273, user2: 92833, user3: 90315 };
let newArr = []
    for (const [key, value] of Object.entries(users)) {      
            newArr.push([key, value*2])
    }
console.log(newArr)


// Exercise 4 : Person Class
// Analyze the code below. What will be the output?

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member); // ----> output: OBJECT


// Exercise 5 : Dog Class
// 1. Analyze the options below.

class Dog {
    constructor(name) {
      this.name = name;
    }
  };

// 2.Which constructor will successfully extend the Dog class? 

// --> No. 2.

// 1
  class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };
// 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
// 3
class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };
// 4
  class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };