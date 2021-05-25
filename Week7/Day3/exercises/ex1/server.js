const exp = require('express');
const bp = require('body-parser')
const app = exp();
const fs = require('fs')

app.use('/', exp.static(__dirname + '/public'))

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.post('/add', (req, res) => {

    console.log(req.body);
    let userArr = [];

    const file = fs.readFileSync('./users');
    let fileStr = file.toString()
    userArr = JSON.parse(fileStr);

    userArr.push(req.body)

    fs.writeFile('./users', JSON.stringify(userArr), (err) => {
        if(err) {
            console.log(err)
        }
    })
    res.send({message: 'OK'})
})

app.set('port', 5000)
app.listen(app.get('port'), () => {
    console.log(`App started at port ${app.get('port')}`)
})
