const list = document.getElementById('list');

const getData = () =>{
    fetch('http://localhost:3000/fruits')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => `error is: ${err}`)
} 

getData();  