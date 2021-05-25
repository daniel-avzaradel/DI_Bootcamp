const fs = require('fs');

fs.readFile('./sometext.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
    }
    console.log(`File reads: ${data}`);
});

fs.writeFile('./newdata.txt', 'New Data File', (err) => {
    if(err) {
        console.log(err)
    }
    console.log(`New file create. Success!`)
})