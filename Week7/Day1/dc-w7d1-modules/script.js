const b = 5;

const number = require('./main')

const c = b + number.num

const http = require('http');

let dateNow = require('./main')

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(`My Module is: ${c}`);
//     res.end();
// }).listen(3000);

// console.log('Hi there at the frontend')

http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(`${dateNow.date}`);
        res.end();
    }).listen(3000);
    
    console.log('Hi there at the frontend')