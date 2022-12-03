const {Router} = require('express');
const router = Router();

const {getUserChofer,createChofer,createTrabajador,getUserTrabajador,getUserIdTrabajador,deleteUserTrabajador,updateUserTrabajador} = require('../controllers/index.controller');

router.get('/chofer',getUserChofer)
router.get('/trabajador',getUserTrabajador)
router.get('/trabajador/:id',getUserIdTrabajador)

router.post('/chofer',createChofer)
router.post('/trabajador',createTrabajador)

router.delete('/trabajador/:id',deleteUserTrabajador)

router.put('/trabajador/:id',updateUserTrabajador)


module.exports = router;