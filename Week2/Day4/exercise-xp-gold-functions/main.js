// ======= EXERCISE 1 : IS_BLANK ====== //

// let string = prompt("Please type in a word");

// if (string === "") {
//     console.log("True: Your string is empty")
// } else {
//     console.log("False: Your string is not empty")
// }

// ======= EXERCISE 2 : ABBREV NAME ====== //

var abbrev = function(fullname) {
    let split = fullname.trim().split(" ");
    if (split[1].length > 0) {
        return split[0] + " " + split[1][0] + ".";
    }
}
console.log(abbrev("Daniel Avzaradel"));


// ======= EXERCISE 3 : SWAP CASE ====== //

let str = "the quick BROWN fox"
    
const swapcase = str => [...str]
    .map(swap => (swap === swap.toLowerCase() ? swap.toUpperCase() : swap.toLowerCase()))
    .join('');

console.log(swapcase(str));


// ======= EXERCISE 4 : SWAP CASE ====== //

function isOmnipresent(arr, elem) {

    for (i in arr) {
        if(arr[i].includes(elem)) {
        } else {
            return console.log(arr[i].includes(elem))   
        }
    }
    return console.log(arr[i].includes(elem)) 
}

isOmnipresent([[1, 7], [7, 3], [7, 1], [6, 7]], 7);