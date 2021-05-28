const exp = require('express');
const app = exp();
const fs = require('fs')

app.use('/', exp.static(__dirname + '/public'))
console.log(__dirname + '/public/')

app.use(exp.json())


app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`listening to port ${app.get('port')}`)
})