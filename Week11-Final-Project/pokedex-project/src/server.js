const exp = require('express');
const app = exp();

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.get('/', (req, res) => {
    
})

app.listen(3000);