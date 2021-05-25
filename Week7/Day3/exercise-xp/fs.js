const fs = require('fs');

// --- EXERCISE 1 -- //

fs.readFile('./sometext.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
    }
    console.log(`File reads: ${data}`);
});


// --- EXERCISE 2 -- //


fs.writeFile('./newdata.txt', 'New Data File', (err) => {
    if(err) {
        console.log(err)
    }
    console.log(`New file created. Success!`)
})


// --- EXERCISE 3 -- //


fs.writeFile('./newdata2.txt', 'New Data File #2', (err) => {
    if(err) {
        console.log(err)
    }
    console.log(`New file #2 created. Success!`)
})

fs.appendFile('./newdata2.txt', '\nAppending text to New Data File #2.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  fs.unlink('./newdata2.txt', function (err) {
    if (err) {
        console.log(err)
    }        
        console.log('File deleted!');
  });