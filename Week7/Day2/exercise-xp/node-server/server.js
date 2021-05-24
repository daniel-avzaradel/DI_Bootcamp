const http = require('http');
const server = http.createServer((req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    data = JSON.stringify(user);
    res.end(data)
})

server.listen(3000)