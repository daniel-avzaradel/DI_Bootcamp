const exp = require('express')
const app = exp();

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`listening to port ${app.get('port')}`)
});