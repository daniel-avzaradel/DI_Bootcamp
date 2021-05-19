
const cars = [
    {brand:'Porshe', price:'1000000'},
    {brand:'Audi', price:'500000'},
    {brand:'Toyota', price:'250000'},
  ]

let newarr = cars.map((values, i) => {
    values["priceVat"] = values.price * 1.17;
    return values
})

console.log(newarr)

const newCars = cars.map(value => {
  return {...value, priceVat: value.price*1.17}
})

const data = document.getElementById('data')

const fetchData = () => {
    fetch('https://zivuch.github.io/employees.json')
    .then(res => res.json())
    .then(data => console.log(data.employees))
    .catch(error => console.log(error))
}

const fetchAsync = async () => {
    try {
      const response = await fetch('https://zivuch.github.io/employees.json');
      const res = await response.json();
      console.log(res.employees)
      return res.employees;
    }
    catch(err) {
      cosole.log(err);
    }
  
}