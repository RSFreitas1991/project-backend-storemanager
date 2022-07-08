const productsModel = require('../models/productsModel');

const productsService = {
  async checkId(id) {
    const product = await productsModel.getProductById(id);
    if (product.length === 0) {
      const error = new Error('Product not found');
      error.code = 404;
      throw error;
    }
  },
  async checkName(name) {
    if (name === undefined) {
      const error = new Error('"name" is required');
      error.code = 400;
      throw error;
    }
    if (name.length < 5) {
      const error = new Error('"name" length must be at least 5 characters long');
      error.code = 422;
      throw error;
    }
  },
  async getProduct(id) {
    const product = await productsModel.getProductById(id);
    return product[0];
  },
  async getProductList() {
    const list = await productsModel.getAllProducts();
    return list;
  },
  async addProductToList(product) {
    const included = await productsModel.addProduct(product);
    return included;
  },
  async updateProductNameById(name, id) {
    await this.checkName(name);
    const update = await productsModel.updateProductNameById(name, id);
    return update;
  },
};

module.exports = productsService;