const express = require('express');
const router = express.Router();
let productsController = require('../controllers/productosController');
let usersController = require('../controllers/productosController');

router.get('/users', usersController.list);

router.get('/users/:id', usersController.user)

router.get('/allproducts', productsController.list)

router.get('/categories', productsController.categories)

router.get('/product/:id', productsController.product)

module.exports = router