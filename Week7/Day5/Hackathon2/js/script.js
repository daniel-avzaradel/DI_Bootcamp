const allKeys = document.querySelectorAll('#keys div')
const whiteKeys = document.querySelectorAll('.white-keys')
const blackKeys = document.querySelectorAll('.black-keys')
const exBtn = document.querySelectorAll('.buttons button')
const exNote = document.getElementById('ex-note')


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
