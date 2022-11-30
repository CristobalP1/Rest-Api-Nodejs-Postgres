const {Router} = require('express');
const router = Router();

const {getUserChofer,createChofer,createTrabajador,getUserTrabajador} = require('../controllers/index.controller');

router.get('/chofer',getUserChofer)
router.get('/trabajador',getUserTrabajador)

router.post('/chofer',createChofer)
router.post('/trabajador',createTrabajador)

module.exports = router;