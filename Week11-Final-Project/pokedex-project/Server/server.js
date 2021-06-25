const exp = require('express');
const app = exp();

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.get('/login', (req, res) => {
    res.send({message: 'ok'})
})

app.listen(5000, () => {
    console.log(`Listening to port 5000`);
})