const fs = require('fs');

fs.readFile('./sometext.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
    }
    console.log(`File reads: ${data}`);
});