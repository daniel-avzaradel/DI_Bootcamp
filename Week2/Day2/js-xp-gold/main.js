// ----- EXERCISE 1: The Word Translator ----- //

let word = prompt("Please choose your language");
word = word.toLowerCase();

if (word === "english") {
    alert("Hello")
    console.log("Hello")
} else if (word === "french") {
    alert("Bonjour")
    console.log("Bonjour")
} else if (word === "hebrew") {
    alert("Shalom")
    console.log("Shalom")
} else { console.log("01110011 01101111 01110010 01110010 01111001")}

// ----- EXERCISE 2: The Grade Assigner ----- //

// let grade = prompt("Please insert your Grade");

if(grade > 90) {
    alert("Grade A");
    console.log("Grade A")
} else if (grade >= 80 && grade <= 90) {
    alert("Grade B");
    console.log("Grade B")
} else if (grade >= 70 && grade < 80) {
    alert("Grade C");
    console.log("Grade C")
} else if (grade < 70) {
    alert("Grade D");
    console.log("Grade D")
}

// ----- EXERCISE 3: VERBING ----- //

let verb = prompt("Please type in a verb");
let regex = /ing/;

let str = "swimming"

console.log(str.match(regex))

if (verb.length >= 3) {
    if (verb.match(regex) == null) {
        verb = verb + "ing";
        console.log(verb)
        alert(verb)
    } else {
        verb = verb + "ly";
        alert(verb)
        console.log(verb)
    }
} else if (verb.length < 3) {
        alert(verb)
        console.log(verb)
}
