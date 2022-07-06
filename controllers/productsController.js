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
  async addProduct(req, res) {
    const product = req.body;
    await productsService.addProductToList(product.name);
    const productsList = await productsService.getProductList();
    res.status(201).json(productsList[productsList.length - 1]);
  },
};

module.exports = productsController;