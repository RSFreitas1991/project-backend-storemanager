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
    try {
      const product = req.body;
      await productsService.checkName(product.name);
      await productsService.addProductToList(product.name);
      const productsList = await productsService.getProductList();
      res.status(201).json(productsList.pop());
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
  async updateProductNameById(req, res) {
    try {
      const { name } = req.body;
      const id = Number(req.params.id);
      await productsService.checkId(id);
      await productsService.updateProductNameById(name, id);
      res.status(200).json({ id, name });
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
  async deleteProductById(req, res) {
    try {
      const id = Number(req.params.id);
      await productsService.checkId(id);
      await productsService.deleteProductById(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
};

module.exports = productsController;