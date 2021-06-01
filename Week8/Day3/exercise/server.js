const exp = require('express');
const cors = require('cors');
const DB = require('./modules/db.js')


const app = exp();
app.use(cors());

app.get('/getCountries', function (req, res) {
    // const countries = req.body
    // res.send(countries)
    res.send('ok')
  })

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`listening to port ${app.get('port')}`)
});