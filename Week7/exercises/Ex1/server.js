if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const exp = require('express');
const app = exp();
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config')
initializePassport(
    passport, 
    email => users.find(user => user.email === email)
    )

const users = [];

app.use(exp.urlencoded({ extended: false}))
app.set('view-engine', 'ejs')
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

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
    
})

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`Im listening to port: ${app.get('port')}`)
})