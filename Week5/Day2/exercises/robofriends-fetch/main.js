const robots = [
    {
      id: 1,
      name: 'John Dorian',
      username: 'jd',
      email: 'jd@scrubs.com',
      image: 'https://robohash.org/John%20Dorian'
    },
    {
      id: 2,
      name: 'Christopher Turk',
      username: 'cturk',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Eliot Reid',
      username: 'ereid',
      email: 'ereid@scrubs.com',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Perry Cox',
      username: 'pcox',
      email: 'pcox@scrubs.com',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Ian Itor',
      username: 'ianitor',
      email: 'janitor@scrubs.com',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Bob Kelso',
      username: 'bobk',
      email: 'bobkelso@scrubs.com',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Carla Espinoza',
      username: 'carlae',
      email: 'nursecarla@scrubs.com',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Jordan Sullivan',
      username: 'jordans',
      email: 'jordan@scrubs.com',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Ted Buckland',
      username: 'ted',
      email: 'tedbuckland@scrubs.com',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'The Todd',
      username: 'todd',
      email: 'todd@scrubs.com',
      image:'https://robohash.org/10?200x200'
    }
    ];
    
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

for (let i=0; i < robots.length; i++) {
    let card = document.createElement("div")
    card.setAttribute('class', 'card')
    card.setAttribute('id', robots[i].id)

    let image = document.createElement('img')
    image.setAttribute('src', robots[i].image)

    let h3 = document.createElement('h3')
    h3.textContent = robots[i].name;

    let cardp = document.createElement('p')
    cardp.textContent = robots[i].email;

    grid.appendChild(card)
    card.appendChild(image)
    card.appendChild(h3)
    card.appendChild(cardp)
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