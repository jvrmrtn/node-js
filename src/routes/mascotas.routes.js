const express = require('express');
const router = express.Router();

const controller = require('../controllers/mascotas.controllers');

// GET /mascotas
router.get('/', controller.mascotas);
router.get('/crear', controller.crear);
router.get('/:id', controller.leer);

//POST /mascotas
router.post('/', controller.mascotaNueva);

// delete /mascotas
router.delete('/:id', controller.borrar);

// update /mascotas
router.put('/:id', controller.actualizar);

module.exports = router;
