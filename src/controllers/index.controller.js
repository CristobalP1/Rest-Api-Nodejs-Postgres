const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'Lider',
    port: '5432',
})


const getUserChofer = async(req,res) => {
    const response = await pool.query('SELECT * FROM chofer');
      console.log(response.rows);
       res.status(200).json(response.rows)
   }

const getUserTrabajador = async(req,res) => {
    const response = await pool.query('SELECT * FROM trabajador');
      console.log(response.rows);
       res.status(200).json(response.rows)
   }

const createChofer = async(req,res) => {
    const {nombre,apellido} = req.body;
    const response = await pool.query('insert into chofer(nombre,apellido) values($1, $2)',[nombre,apellido]);
    console.log(response);
    res.send('user create');
}

const createTrabajador = async(req,res) => {
    const {nombre,apellido,edad} = req.body;
    const response = await pool.query('insert into Trabajador(nombre,apellido,edad) values($1, $2, $3)',[nombre,apellido,edad]);
    console.log(response);
    res.send('user create');
}


module.exports = {
    getUserChofer,
    createChofer,
    createTrabajador,
    getUserTrabajador
}