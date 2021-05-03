let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  createCards(xhr.response)
}


const root = document.getElementById('root')
const header = document.createElement("header");
const logo = document.createElement("h1");
logo.textContent = "ROBOFRIENDS";

const searchbar = document.createElement("input");
searchbar.setAttribute('onkeyup', 'search()')
searchbar.setAttribute('placeholder', 'Search')

const grid = document.createElement("div");

grid.setAttribute('id', 'grid')

root.appendChild(header);
header.appendChild(logo);
header.appendChild(searchbar);
root.appendChild(grid);

const createCards = function(robots) {
  for (let i=0; i < robots.length; i++) {
    let card = document.createElement("div")
    card.setAttribute('class', 'card')
    card.setAttribute('id', robots[i].id)

    let image = document.createElement('img')
    image.setAttribute('src', `https://robohash.org/${robots[i].id}?size=200x200`)

    let h3 = document.createElement('h3')
    h3.textContent = robots[i].name;

    let cardp = document.createElement('p')
    cardp.textContent = robots[i].email;

    grid.appendChild(card)
    card.appendChild(image)
    card.appendChild(h3)
    card.appendChild(cardp)
}
}

let cards = document.querySelectorAll('.card')

function search() {
    
    for (let i = 0; i < cards.length; i++) {
        let filter = searchbar.value.toUpperCase();
        let h3s = document.querySelectorAll('.card h3')
        console.log(h3s)

        let txt = h3s[i].innerText;
        console.log(txt)

        if(txt.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
        }
    }
}