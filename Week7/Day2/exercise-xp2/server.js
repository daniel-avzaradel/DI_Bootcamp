const exp = require('express');
const app = exp();


// EXERCISE 1

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

// EXERCISE 2

app.get('/:id', ((req, res) => {
    let id = {
        id: req.params.id
    }
    console.log(id)
    res.send(JSON.stringify(id))
}))

// EXERCISE 3


