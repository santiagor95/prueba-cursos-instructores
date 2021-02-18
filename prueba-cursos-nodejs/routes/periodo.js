var express = require('express');
var router = express.Router();

const periodoController = require('../controllers/periodoController')

router.get('/obtenerTodos', periodoController.obtenerTodos);

// Asignar curso periodo instructor
router.post('/asignar', periodoController.asignarPeriodo);

router.get('/obtenerPorIdCurso/:idCurso', periodoController.obtenerPorIdCursoPeriodo);

// Eliminar periodo
router.delete('/eliminar/:id', periodoController.eliminar);

module.exports = router;
