// EXERCISE 1 //


// let age = prompt("How old are you?");
// if (age < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off")
// } else if (age == 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// } else {
//     alert("Powering On. Enjoy the ride!")
// }

// INTRODUCTION TO OBJECTS EXERCISE 1 //

let user = {
    username: "Wakeman",
    password: "w1234"
}

const newsfeed = [
    {username: "Maya", timeline: "m12345"},
    {username: "Michael", timeline: "romeo123"},
    {username: "Jordan", timeline: "rudess123"},
]
const database = [user, newsfeed[0], newsfeed[1]];


console.log(database);