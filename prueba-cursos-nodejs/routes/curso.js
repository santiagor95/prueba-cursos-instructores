var express = require('express');
var router = express.Router();
const cursoController = require('../controllers/cursoController')

// Asignar curso periodo instructor
router.get('/obtenerTodos', cursoController.obtenerTodos);

router.post('/crear', cursoController.crear);
router.get('/:id', cursoController.obtenerPorId);

module.exports = router;
