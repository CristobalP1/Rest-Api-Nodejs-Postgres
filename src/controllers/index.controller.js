const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'Lider',
    port: '5432',
})

const getUser = async(req,res) => {
 const response = await pool.query('SELECT * FROM clientes');
   console.log(response.rows);
   res.send('users');
}

module.exports = {
    getUser
}