// const cars = [
//     {brand:'Porshe', price:'1000000'},
//     {brand:'Audi', price:'500000'},
//     {brand:'Toyota', price:'250000'},
//   ]

// let newarr = cars.map((values, i) => {
//     values["priceVat"] = values.price * 1.17;
//     return values
// })

// console.log(newarr)

// const newCars = cars.map(value => {
//   return {...value, priceVat: value.price*1.17}
// })

// const data = document.getElementById('data')

// const fetchData = () => {
//     fetch('https://zivuch.github.io/employees.json')
//     .then(res => res.json())
//     .then(data => console.log(data.employees))
//     .catch(error => console.log(error))
// }

// const fetchAsync = async () => {
//     try {
//       const response = await fetch('https://zivuch.github.io/employees.json');
//       const res = await response.json();
//       console.log(res.employees)
//       return res.employees;
//     }
//     catch(err) {
//       cosole.log(err);
//     }
  
// }


class SomeClass {
  constructor() {
    this.name = 'Daniel';
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
}

let a = new SomeClass();
let b = new SomeClass();

b.setName('Zivuch');

class Human {
  constructor() {
    this.name = 'Human';
    this.gender = '';
    this.profession = '';
    this.age = '';
  }
  setName(value) {
    this.name = value;
  }
  setGender(gender) {
    this.gender = gender;
  }
  setProfession(prof) {
    this.profession = prof;
  }
  setAge(age) {
    this.age = age;
  }
}

let daniel = new Human();
daniel.setName('Daniel')
daniel.setGender('male')
daniel.setProfession('programmer')
daniel.setAge(32)
console.log(daniel)