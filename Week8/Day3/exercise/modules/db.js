const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'daniel88',
        database: 'dvdrental'
    }
})

const getCountries = () => {
    return db.select('*').from('country')
}

getCountries()
.then(data => {
    console.log(data);
})

module.exports = {
    getCountries
}