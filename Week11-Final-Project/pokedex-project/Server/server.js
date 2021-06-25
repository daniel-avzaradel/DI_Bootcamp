const exp = require('express');
const app = exp();

let db = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'daniel88',
      database : 'pokedex',
      port: 5432
    }
});

app.set("db", db);

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.get('/login', (req, res) => {
    db
    .select('*').from('users')
    .then(user => console.log(user));
})

app.listen(5000, () => {
    console.log(`Listening to port 5000`);
})