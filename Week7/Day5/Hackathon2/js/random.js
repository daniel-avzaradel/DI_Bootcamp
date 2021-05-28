const allKeys = document.querySelectorAll('#keys div')
const whiteKeys = document.querySelectorAll('.white-keys')
const blackKeys = document.querySelectorAll('.black-keys')
const exBtn = document.querySelectorAll('.buttons button')
const exNote = document.getElementById('ex-note')
const replay = document.getElementById('replay')
const correctA = document.getElementById('correctA');
const wrongA = document.getElementById('wrongA');
const exnumber = document.getElementById('exnumber');
const next = document.getElementById('next');
const close = document.querySelector('.close')

let note = '';
let correct = 0;
let incorrect = 0;
let currentEx = 1;

const arrNotes = ['c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g', 'gs', 'a', 'as', 'b',];

resetColors();


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

function getRandom() {
    let randomNote = Math.floor(Math.random() * 12);
    let randomOctave = Math.floor(Math.random() * 4 + 3);

    note = arrNotes[randomNote] + randomOctave;
    console.log(note)

    for (let i=0; i < allKeys.length; i++) {
        if(allKeys[i].classList.contains('white-keys')) {
            allKeys[i].style.backgroundColor = "white"

        } else {
            allKeys[i].style.backgroundColor = "black"
        }
    }
    
}
getRandom()

function resetColors() {
    whiteKeys.forEach(item => item.style.backgroundColor = "rgb(243, 243, 243)")
    blackKeys.forEach(item => item.style.backgroundColor = "black")
}

function playNote() {

    let audio = new Audio(`../sounds/${note}.mp3`)
        audio.play();    

    let selectedNote = document.getElementById(`${note}`)

    // selectedNote.style.backgroundColor = "rgba(71, 255, 47)"
    selectedNote.style.border = "1px solid black"
}

replay.addEventListener('click', () => {
    playNote();
})

let guess = () => {

        playNote();
        exnumber.textContent = currentEx;

        allKeys.forEach(item => {
        item.addEventListener('click', () => {
            if (item.id == note) {
                
                if(currentEx == 10) {
                    correct++
                    correctA.textContent = ` ${correct} `;
                    resetColors();
                    return showResults();
                }

                return nextEx();

            } else if (item.id != note) {
                item.style.backgroundColor = "salmon";
                item.style.border = "1px solid black";
                wrongA.style.color = "red";
                wrongA.style.fontWeight = "bold";
                incorrect++;
                wrongA.textContent = ` ${incorrect} `;
            }
            })
        })

}

function nextEx() {

    correct++
    correctA.style.color = "green";
    correctA.style.fontWeight = "bold";
    correctA.textContent = ` ${correct} `;

    resetColors();
    currentEx++;
    exnumber.textContent = currentEx;
    getRandom();

    return setTimeout(function () {
        playNote();
    }, 1000)
}

next.addEventListener('click', () => {

    if(currentEx == 10) {
        resetColors();
        return showResults();
    }

    currentEx++;
    exnumber.textContent = currentEx;
    getRandom();
    return setTimeout(function () {
        playNote();
    }, 1000)
})

function showResults() {
    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('hidden')

    let finalMessage = document.getElementById('resultMessage')

    let totalPercent = correct + incorrect;
    let correctPercent = (100 / totalPercent) * correct;
    
    let resultsPercent = document.getElementById('resultsPercent')
    resultsPercent.style.fontSize = "26px";

    if(correctPercent < 70) {
        resultsPercent.style.color = "red";
        resultsPercent.style.fontWeight = "bold";
        resultsPercent.textContent = `${correctPercent.toFixed(1)}%`
        finalMessage.style.color = '#333';
        finalMessage.textContent = 'You can do better. Keep trying.';

    } else if (correctPercent >= 70) {

        resultsPercent.style.color = "green";
        resultsPercent.style.fontWeight = "bold";
        resultsPercent.textContent = `${correctPercent.toFixed(1)}%`;
        finalMessage.style.color = '#333';
        finalMessage.textContent = 'Great work! Keep it going!';

    }        
}

function closeOverlay() {
    let overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden')

    correct = 0;
    correctA.textContent = ` ${correct} `;

    incorrect = 0;
    wrongA.textContent = ` ${incorrect} `;

    currentEx = 1;
    exnumber.textContent = currentEx;

}

guess();