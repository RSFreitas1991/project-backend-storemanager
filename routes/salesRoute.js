const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.post('/', salesController.AddSale);

module.exports = salesRoute;