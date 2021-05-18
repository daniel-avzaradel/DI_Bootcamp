
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
