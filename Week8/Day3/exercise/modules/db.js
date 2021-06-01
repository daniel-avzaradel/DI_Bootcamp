const knex = require('knex');

const db = knex({
    client: pg,
    connection: {
        host: '127.0.0.1',
        port: '5555',
        user: 'postgres',
        password: 'daniel88',
        database: 'dvdrental'
    }
})

const getCountries = () => {
    return db.select('*').from('country')
}

module.exports = {
    getCountries
}