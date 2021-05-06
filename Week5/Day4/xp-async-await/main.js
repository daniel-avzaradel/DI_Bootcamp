// EXERCISE 1: CONVERSION

async function loadData() {
    const response = await fetch("https://swapi.dev/api/starships/9/")
    const starships = await response.json();
    console.log(starships)
    return starships;
}


// EXERCISE 2: ANALYZE


// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();         =>> output: first is 'calling', then 'resolved' since the second function is asyncronous and the first has a 2s delay to resolve.
