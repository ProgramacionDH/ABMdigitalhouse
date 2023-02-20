var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController')


router.get('/', function(req, res, next) {
  res.send('Estoy en productos');
});

router.get('/create', productosController.create);

router.post('/create', productosController.store);

router.get('/edit/:id', productosController.edit);

router.post('/edit/:id', productosController.update);

router.get('/destroy/:id', productosController.destroy);


module.exports = router;
