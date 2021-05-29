const exp = require('express');
const app = exp();
const bp = require('body-parser');
const fs = require('fs');
const path = require('path');

const urlencodedParser = bp.urlencoded({ extended: false })

app.use(bp.json())

app.use('/', exp.static(__dirname + '/public'))

app.use(exp.json())

app.post('/registered', urlencodedParser, (req, res) => {
    try {
        let newUser = {
            name: req.body.name,
            password: req.body.password
        }
    
        currentUser = req.body.name;
        console.log(`logged user is ${currentUser}`)
    
        fs.appendFile('users', JSON.stringify(newUser), (err) => {
            if(err) {
                console.log(err)
            }
            console.log(newUser)
        })
        
        res.statusCode = 201;
        res.sendFile(path.join(__dirname, '/public/index.html'))
        

    } catch(err) {
        console.log(err);
        res.statusCode = 500;
        res.send('Error: account not created')
    }
    
})

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`listening to port ${app.get('port')}`)
})