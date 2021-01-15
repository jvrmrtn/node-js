const express = require('express');
const router = express.Router();

const controller = require('../controllers/index.controllers');

// GET
router.get('/', controller.index);

router.get('/servicios', controller.servicios);

module.exports = router;
