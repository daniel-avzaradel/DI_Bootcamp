// EXERCISE 1: STAR WARS API //

const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

let people = urls.map(url => fetch(url));
console.log(people)