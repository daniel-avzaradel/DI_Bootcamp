[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });

  // it will return a value only if you assign it to a variable and console.log that var.


const test = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
);
console.log(test) // --> output [ 1, 2, 0, 1, 2, 3 ]


// Exercise 3 : Analyze This Code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})