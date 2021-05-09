const green = document.getElementById('green');
const left = document.getElementById('left');
const right = document.getElementById('right');
const image = document.getElementById('img');


const name = document.getElementById('name');
const number = document.getElementById('number');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const type = document.getElementById('type');


let id = undefined;

const getData = async () => {
    id = Math.floor(Math.random() * 899)
    try {
        image.setAttribute('src', './img/loading.gif')
        image.style.width = "120px";
        image.style.height = "120px";
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const res = await response.json();

        let content = document.getElementById('content');
        let contentImg = document.getElementById('content-img');

        image.setAttribute('src', `${res.sprites.front_default}`)
        image.style.maxHeight = "300px";
        image.style.width = "200px";

        contentImg.appendChild(image)
        
        name.textContent = `${res.name.toUpperCase()}`;
        number.textContent = `Pokemon No. ${res.id}`
        height.textContent = `Height: ${res.height}`
        weight.textContent = `Weight: ${res.weight}`
        type.textContent = `Type: ${res.types[0].type.name}`
   

    } catch {
        console.log('error: failed to fetch')
    }
}

green.addEventListener('click', () => {
    getData();
})

left.addEventListener('click', async () => {
    id--;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const res = await response.json();

        let content = document.getElementById('content');
        let contentImg = document.getElementById('content-img');

        image.setAttribute('src', `${res.sprites.front_default}`)
        contentImg.appendChild(image)

        name.textContent = `${res.name.toUpperCase()}`;
        number.textContent = `Pokemon No. ${res.id}`
        height.textContent = `Height: ${res.height}`
        weight.textContent = `Weight: ${res.weight}`
        type.textContent = `Type: ${res.types[0].type.name}`

    } catch {
        console.log('error: failed to fetch')
    }
})

right.addEventListener('click', async () => {
    id++;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const res = await response.json();

        let content = document.getElementById('content');
        let contentImg = document.getElementById('content-img');

        image.setAttribute('src', `${res.sprites.front_default}`)
        contentImg.appendChild(image)

        name.textContent = `${res.name.toUpperCase()}`;
        number.textContent = `Pokemon No. ${res.id}`
        height.textContent = `Height: ${res.height}`
        weight.textContent = `Weight: ${res.weight}`
        type.textContent = `Type: ${res.types[0].type.name}`

    } catch {
        console.log('error: failed to fetch')
    }
})