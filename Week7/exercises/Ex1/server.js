const exp = require('express');
const app = exp();
const bcrypt = require('bcrypt')

const users = [];

app.use(exp.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Daniel'})
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    try{
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now.toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

app.set('view-engine', 'ejs')

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`Im listening to port: ${app.get('port')}`)
})