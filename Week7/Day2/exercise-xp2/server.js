const exp = require('express');
const app = exp();

app.use('/', exp.static(__dirname + '/public'))

app.get('/user', (req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    console.log(user)
    res.send(user)
})


app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`App running on port ${app.get('port')}`)
})
