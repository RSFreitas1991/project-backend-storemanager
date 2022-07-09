const { Router } = require('express');
const productController = require('../controllers/productsController');

const productsRoute = Router();

productsRoute.get('/:id', productController.getProductById);
productsRoute.put('/:id', productController.updateProductNameById);
productsRoute.delete('/:id', productController.deleteProductById);
productsRoute.get('/', productController.getList);
productsRoute.post('/', productController.addProduct);

module.exports = productsRoute;