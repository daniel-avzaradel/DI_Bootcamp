const fs = require('fs');

let data = {name: 'Daniel'}

fs.appendFile('./data.txt', JSON.stringify(data), (err => {
    if(err) {
        console.log(err)
    }
}));

let newData = ['123', 'Daniel', 'Avzaradel']

fs.writeFile('./one.txt', JSON.stringify(newData), (err => {
    if(err) {
        console.log(err);
    }
}))

fs.copyFile('./one.txt', './two.txt', err => {
    if(err) {
        console.log(err);
    }
})