const allKeys = document.querySelectorAll('#keys div')
const whiteKeys = document.querySelectorAll('.white-keys')
const blackKeys = document.querySelectorAll('.black-keys')
const exBtn = document.querySelectorAll('.buttons button')
const exNote = document.getElementById('ex-note')
const loggedUser = document.getElementById('loggedUser');
let localUsers;

const arrNotes = ['c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g', 'gs', 'a', 'as', 'b',];


whiteKeys.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.style.backgroundColor = "rgba(71, 255, 47)";
    })
    item.addEventListener('mousedown', () => {
        let audio = new Audio(`../sounds/${item.id}.mp3`)
        audio.play();
    })
    item.addEventListener('mouseup', () => {
        item.style.backgroundColor = "white";
    })
})

blackKeys.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.style.backgroundColor = "rgb(71, 255, 47)";
    })
    item.addEventListener('mousedown', () => {
        let audio = new Audio(`../sounds/${item.id}.mp3`)
        audio.play();
    })
    item.addEventListener('mouseup', () => {
        item.style.backgroundColor = "black";
    })
})

exBtn.forEach(item => item.addEventListener('click', () => {
    for (let i = 0; i < exBtn.length; i++) {
        exBtn[i].style.backgroundColor = "rgb(243, 243, 243)"
    }
    item.style.backgroundColor = "greenyellow"
}))


// sidebar and login //

let expands = false;

function expand() {

    let left = document.getElementById('left');
    let icon = document.querySelector('#left i');

    if(!expands) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
        left.style.left = "0px";
        expands=true;

    } else {
        icon.classList.add('fa-chevron-right');
        icon.classList.remove('fa-chevron-left');
        left.style.left = "-170px";
        expands=false;
    }

}

function closePop() {
    let loginOverlay = document.querySelector('.login-overlay')
    loginOverlay.classList.toggle('hidden')
}

const signUp = document.getElementById('singup-form')
const logIn = document.getElementById('login-form')

let users = []


signUp.addEventListener("submit", e => {
    e.preventDefault();

    let nameInp = document.querySelector('#signName')
    let passInp = document.querySelector('#signPass')

    console.log(nameInp.value)
    console.log(passInp.value)

    if (localStorage.length == 0) {

        let user = {
            name: nameInp.value,
            password: passInp.value
        }
        users.push(user);
    
        localStorage.setItem('users', JSON.stringify(users))
        console.log(JSON.parse(localStorage.getItem('users')))
        console.log('Form submitted')
    
        loggedUser.textContent = nameInp.value;
        closePop();

    } else {
        (JSON.parse(localStorage.getItem('users'))).find(item => {
            if (nameInp.value == item.name && passInp.value == item.password) {
                console.log('User already exists')
                let dot = document.getElementById('dot')
                dot.textContent = "User already exists"
                dot.style.color = "salmon";
                dot.style.visibility = "visible";
            } 
        })
    }
})

logIn.addEventListener("submit", e=> {
    e.preventDefault();

    let logName = document.getElementById('logName')
    let logPass = document.getElementById('logPass')
    let wrongInfo = document.getElementById('wrongLog')

    localUsers = JSON.parse(localStorage.getItem('users'))
    console.log(localUsers)

    localUsers.find(item => {
        if (logName.value == item.name && logPass.value == item.password) {
            console.log('You are logged in!')
            loggedUser.textContent = logName.value;
            wrongInfo.style.visibility = "hidden";
            closePop();
            return;
        } else {
            wrongInfo.style.visibility = "visible";
        }
    })
})