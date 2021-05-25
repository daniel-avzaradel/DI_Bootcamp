const fs = require('fs');

let arrows = []

fs.readFile('text', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    }
    for(let i=0; i < data.length; i++) {
        arrows.push(data[i])
    }
    let count = 0;
    for(let i=0; i < arrows.length; i++) {
        if (arrows[i] == '>') {
            count++
        } else {
            count--
        }
    }
    console.log(arrows)
    console.log(`Answer 1. Total Steps: ${count}.`)

    let steps = 0;
    let countRL = 0;
    
        for(let i=0; i < arrows.length; i++) {
            if (countRL >= 0) {
                if (arrows[i] == '>') {
                    countRL++
                    steps++
                } else {
                    countRL--
                    steps++
                }
            } else if (countRL == -1) {
                console.log(`Answer 2. Total Steps: ${steps}`)
                return;
            }
    }
})
