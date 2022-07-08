const salesService = require('../services/salesService');

const salesController = {
  async AddSale(req, res) {
    try {
      const product = req.body;
      const promises = [];
      for (let index = 0; index < product.length; index += 1) {
        promises.push(salesService.isQuantityValid(product[index]));
      }
      await Promise.all(promises);
      const saleId = await salesService.addSale();
      for (let index = 0; index < product.length; index += 1) {
        promises.push(salesService.addProductSale(product[index]));
      }
      await Promise.all(promises);
      res.status(201).json({ id: saleId, itemsSold: product });
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
  async productSaleList(_req, res) {
    const productsList = await salesService.getAllProductSales();
    res.json(productsList);
  },
  async productSaleById(req, res) {
    try {
      const id = Number(req.params.id);
      await salesService.saleIdExists(id);
      const product = await salesService.getProductSalesById(id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = salesController;