const express = require('express');
const app = express();

app.route('/')
    .get((req, res) => {

    res.send('<h1>This is an HTML tag</h1>')

})
app.listen(3000)