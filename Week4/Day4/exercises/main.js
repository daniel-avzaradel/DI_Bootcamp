let s1 = "The quick brown fox jumps over the lazy dog";
let s2 = "We promptly judged antique ivory buckles for the prize";
let s3 = "daniel";

const ab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const pangramCheck = (str) => {
    str = str.toLowerCase().split("");
    let pangram;
    for (let i=0; i < ab.length; i++) {

        if (str.includes(ab[i])) {
             pangram = true;
        } else {            
            pangram = false;
            console.log(`${ab[i]} is missing`);
            break;
        }
    }
    return pangram
}

console.log(pangramCheck(s3))


/* Birthday Cake Candles
*  This array are Birthday Cake Candles
*  You can blow only the tallest candles
*  let ar = [2,4,4,1]
*  birthdayCakeCandles function will return
*  how many candles you can blow
*/

let arr = [2,4,4,1,8,8,2,8,7,8];

const countCandles = (arr) => {
    let maxNum = Math.max(...arr);
    let filtered = arr.filter(value => value === maxNum);

    return filtered.length;
}
console.log(countCandles(arr))



/* Object Keys */

const object1 = {
    'Israel': 'tel aviv',
    'Brazil': 'Rio de Janeiro',
    'United States': 'New York'
  };

let countries = Object.keys(object1);
console.log(countries)

const populations = {
    tokyo: 1,
    delhi: 4,
    shanghai: 3,
    datetime: {
        time: 5,
        date: 6,
    }
}

const {tokyo, datetime} = populations;
console.log(tokyo, datetime)