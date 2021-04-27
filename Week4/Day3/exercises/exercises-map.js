/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*/

// function reverseStr(str) {
//     let newStr = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     console.log(newStr)
// }
// reverseStr(str);

// let str = 'word in a given String';

// function reverseS(str) {
//     let reverse = str.split(" ");
//     let reverseSt = [];
//     for (let i = reverse.length - 1; i>= 0; i--) {
//        reverse[i].split(" ")
//        let wordArr = [];
//        for (let j = reverse[i].length-1; j >=0; j--) {
//             wordArr.push(reverse[i][j])
//        }
//     reverseSt.push(wordArr.join(""))
//     }
//     return reverseSt.join(" ");
// }
// console.log(reverseS(str))


// let numbers = [2, 4, 5, 22, 6];

// const multiple2 = (param) => {
//     param.forEach((item, i, arr) => {
//         arr[i] = item * 2;
//     })
//     return param;
// }
// console.log(multiple2(numbers))

// const newArr = numbers.map((item, i) => {
//     return item * 2;
// })
// console.log(newArr)

// let users = ['eli', 'daniel', 'ziv', 'hadas', 'josh']

// const email = users.map((item) => {
//     return item + '@gmail.com'
// })

// console.log(email);

let arrf = [1, 2, 4, 5, 0, 9, 7];

const greaterThanThree = [];

for(x in arrf) {
    if (arrf[x]>3) {
        greaterThanThree.push(arrf[x])
    }
}
console.log(greaterThanThree)

const filterMethod = arrf.filter(num => num > 3);
console.log(filterMethod);


const dragons = ['Tim', 'Johnasathan', 'Sandy', 'Sarah'];
// get all names that start with Sa / contain Sa
let regex = /sa/i
const sa = dragons.filter(item => item.match(regex))
console.log(sa)

/* Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/

let arr = [2, 5, 10,100]
const sum = function(arr) {
    let newarr = 0;
    for (x in arr) {
        newarr += arr[x]
    }
    return newarr
}
console.log(sum(arr))

const reduceMethod = arr.reduce((total, item) => total = total + item)
console.log(reduceMethod)


let account = [{dolars:2}, {dolars:5}, {dolars:10},{dolars:100}];

const dolars = account.reduce((total, item) => total = total + Object.values(item))