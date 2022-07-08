const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.get('/:id', salesController.productSaleById);
salesRoute.post('/', salesController.AddSale);
salesRoute.get('/', salesController.productSaleList);

module.exports = salesRoute;