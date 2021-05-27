const exp = require('express');
const bp = require('body-parser');
const fs = require('fs')
const app = exp();

let urlencodedParser = bp.urlencoded({ extended: false })
app.use(bp.json())

app.use('/', exp.static(__dirname))

app.get('/', (req, res) => {
})

app.post('/formdata', urlencodedParser, function (req, res) {
    
    let response = JSON.stringify(req.body);
    fs.appendFile('shop-list', response, err => {
        if(err) throw err;
    })

    fs.readFile('shop-list', function(err, data) {
        if(err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    
    
  })

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`Im running on port ${app.get('port')}`)
})