// console.log('Hello World');


// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('Hello from the server')
//     res.end('<h1>Hello World from the Server</h1>')
// })

// server.listen(3000)

const bp = require('body-parser');


const express = require('express');
const app = express();

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use('/', express.static(__dirname+'/public'))


app.route('/login')
    .get((req, res) => {
        console.log(req.query)
        // res.send('login get')
        res.send({message: 'OK'})
    })

    .post((req, res) => {
        console.log(req.body.username, req.body.password)
        res.send('login post')
    })

// app.get('/login', (req, res) => {
//     console.log(req.query)
//     res.send('login from GET')
// })

// app.post('/login', (req, res) => {
//     console.log(req.query)
//     res.send('login from POST')
// })

app.listen(3000);