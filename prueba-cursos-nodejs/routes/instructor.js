var express = require('express');
var router = express.Router();

const instructorController = require('../controllers/instructorController')

router.get('/obtenerTodos', instructorController.obtenerTodos);

router.get('/crear', instructorController.crear);

module.exports = router;
