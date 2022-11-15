const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'market',
    port: '3027',
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

const getUser = async(req,res) => {
/*    const response = await pool.query('SELECT * FROM cliente');
   console.log(response.rows); */
   res.send('users');
}

module.exports = {
    getUser
}