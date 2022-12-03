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
    res.json({
        message:'User Added Succesfully',
        body:{
            user : {nombre,apellido}
        }
    })
    res.send('user create');
}

const createTrabajador = async(req,res) => {
    const {nombre,apellido,edad} = req.body;
    const response = await pool.query('insert into Trabajador(nombre,apellido,edad) values($1, $2, $3)',[nombre,apellido,edad]);
    console.log(response);
    res.send('user create');
}

const getUserIdTrabajador = async(req,res) => {
    const id = req.params.id;
    const response = await pool.query('Select * from trabajador where idTrabajador = $1',[id])
    res.json(response.rows)
}

const deleteUserTrabajador = async(req,res) => {
    const id = req.params.id;
    const response = await pool.query('delete from trabajador where idTrabajador = $1',[id])
    console.log(response);
    res.json(`User ${id} delete successfully`)
}

const updateUserTrabajador = async(req,res) => {
    const id = req.params.id;
    const {nombre,apellido,edad} = req.body;
    const response = await pool.query('update trabajador set nombre = $1 ,apellido = $2, edad = $3 where idTrabajador = $4',[nombre,apellido,edad,id])
    console.log(response);
    res.send(`USER ${id} UPDATE`)
}


module.exports = {
    getUserChofer,
    createChofer,
    createTrabajador,
    getUserTrabajador,
    getUserIdTrabajador,
    deleteUserTrabajador,
    updateUserTrabajador
}