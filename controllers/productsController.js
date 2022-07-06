const productsService = require('../services/productsService');

const productsController = {
  async getProductById(req, res) {
    try {
      const id = Number(req.params.id);
      await productsService.checkId(id);
      const product = await productsService.getProduct(id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  async getList(_req, res) {
    const productsList = await productsService.getProductList();
    res.json(productsList);
  },
};

module.exports = productsController;