// EXERCISE 1 //

let me = ["my","favorite","color","is","blue"]
let str = me.join(" ");

console.log(str);

// EXERCISE 2 //

let str1 = "mix";
let str2 = "pod";

str1 = str1.replace("mi", "po");
str2 = str2.replace("po", "mi");

let sentence = str1 + " " + str2;
console.log(sentence);


// EXERCISE 3: CALCULATOR //

var num1 = parseInt(prompt("Insert the first number"));
var num2 = parseInt(prompt("Insert the second number"));
sum = num1 + num2;
alert("The sum of your numbers is " + sum);
console.log(sum);