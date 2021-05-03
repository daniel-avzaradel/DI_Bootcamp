// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

let number = 123456

function toDigits(number) {
    let arr = new String(number).split("");

    let sum = 0;
    for (x in arr) {
        sum += Number(arr[x])
    }
    if(sum > 10) {
        number = sum;
        return toDigits(number)
    } else {
        // console.log(sum)
        return sum
    }
}

console.log(toDigits(number))