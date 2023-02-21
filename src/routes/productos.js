const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController.js')


router.get('/', function(req, res) {
  res.send('Estoy en productos');
});

router.get('/create', productosController.create);

router.post('/create', productosController.store);

router.get('/edit/:id', productosController.edit);

router.post('/edit/:id', productosController.update);

router.get('/destroy/:id', productosController.destroy);


module.exports = router;
