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
};

module.exports = salesController;