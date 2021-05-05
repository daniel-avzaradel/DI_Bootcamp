// let compareToTen = (num) => {
//     let p = new Promise((resolve, reject) => {
//         if(num > 10) {
//             resolve (`Number ${num} is greater than 10.`)
//         } else {
//             reject (`Your number ${num} is less than 10`);
//         }
//     })
//     return p;
// } 

// compareToTen(6)
// .then(resolve => {
//     console.log('resolve', resolve)
// })
// .catch(data => {
//     console.log('error ', data)
// })


// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]

// const arrayOfWords = ['cucumber', 'tomatos', 2, 'avocado']

// const makeAllCaps = (arr) => {
//     let p = new Promise((resolve, reject) => {
//         let newarr = arr.map(item => {
//             if(typeof(item) == 'string') {
//                 return item.toUpperCase();
//             }
//             else {
//                 reject ()
//             }
//         })
//         resolve(newarr)
//     })
//     return p;
// }

// makeAllCaps(arrayOfWords)
// .then(data => data.forEach(data1 => {
//     console.log('your item is', data1)
// }))
// .catch(err => console.log('your item is not a string'))

function ab(a,b) {
    let promise = new Promise((resolve, reject) => {
        if(typeof(a) == 'number' && typeof(b) == 'number') {
            resolve(a+b);
        } else if(typeof(a) != 'number' || typeof(b) != 'number'){
            reject();
        }
    })
    return promise;
}


ab(23,'45')
.then(result => console.log(result))
.catch(error => console.log(`one of your items is not a number`))