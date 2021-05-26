const exp = require('express');
const app = exp();

const bp = require('body-parser');

let urlencodedParser = bp.urlencoded({ extended: false })
app.use(bp.json())


app.use('/', exp.static(__dirname + '/public'))
app.use('/pic', exp.static(__dirname + '/public/pic.html'))
app.use('/form', exp.static(__dirname + '/public/form.html'))


app.get('/aboutme/:hobby', ((req, res) => {
    let regex = /^[a-z]+$/;
    if (regex.test(req.params.hobby) == false) {
        res.statusCode = 404;
        res.send('404: Page not found')
    }
    res.statusCode = 200;
    res.send('Your hobby is: ' + req.params.hobby)
}))

app.post('/formdata', urlencodedParser, function (req, res) {
    console.log(req.body)
    let response = req.body;
    res.send(`${response.name} sent you a message from ${response.email}: ${response.message}`)
  })

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`listening to port ${app.get('port')}`)
});