// // ----- EXERCISE 1: AGE DIFFERENCE ------ //

let age1 = 1988;
let age2 = 2000;

let ageDif = age2 - age1;

const doubleAge = age2 + ageDif;
console.log(doubleAge);



// // ----- EXERCISE 2: ZIP CODES ------ //


function zipCode() {

    zipcode = prompt("please type in your zip code in a valid format - 5 digits")

    if (zipcode.length !== 5) {

        console.log(zipcode.length)
        console.log(typeof(zipcode))
        return zipCode();
    
    } else if (isNaN(zipcode)) {

        console.log(isNaN(zipcode))
        alert("Your zipcode must contain 5 numbers")
        return zipCode();

    } else if (zipcode.includes(" ")) {
        alert("Your zipcode cannot contain any whitespaces")
        console.log(zipcode.length)
        console.log(typeof(zipcode))
        return zipCode();
    
    } else if (zipcode.length == 5 && isNaN(zipcode) === false) {
        alert(`Your zipcode is ${zipcode}`)
        console.log(zipcode)
    }

}

// zipCode();


// // ----- EXERCISE 2: ZIP CODES ------ USING REGEX //

let regex = /^\d{5}$/
let zipcode = prompt("please type in your zip code in a valid format - 5 digits")


while(regex.test(zipcode) === false) {
    
zipcode = prompt("please type in your zip code in a valid format - 5 digits")

console.log(regex.test(zipcode))
console.log(zipcode)

}

// ----- EXERCISE 3: SECRET WORD //

let word = prompt("Please type in a word")

let secret = /[aeiou]/gi
console.log(word.replace(secret, "2"));