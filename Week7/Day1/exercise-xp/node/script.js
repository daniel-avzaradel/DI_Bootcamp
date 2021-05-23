let arr = [1, 2, 3, 5];
arr.forEach(elem => {
    console.log(`num * 2 = ${elem * 2}`)
})

const abc = require('./script2.js');

console.log(abc)

const abcd = require('axios');
abcd.get('https://jsonplaceholder.typicode.com/users')
.then(data=> console.log(data.data))