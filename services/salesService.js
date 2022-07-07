const salesModel = require('../models/salesModel');

const salesService = {
  async addSale() {
    const included = await salesModel.addSale();
    return included;
  },
  async addProductSale(product) {
    const included = await salesModel.addProductSale(product);
    return included;
  },
  async isProductIdValid(product) {
    if (product.productId === undefined) {
      const error = new Error('"productId" is required');
      error.code = 400;
      throw error;
    }
    await this.IsProductIdExists(product);
  },
  async isQuantityValid(product) {
    if (product.quantity === undefined) {
      const error = new Error('"quantity" is required');
      error.code = 400;
      throw error;
    }
    if (product.quantity <= 0) {
      const error = new Error('"quantity" must be greater than or equal to 1');
      error.code = 422;
      throw error;
    }
    await this.isProductIdValid(product);
  },
  async IsProductIdExists(product) {
    const list = await this.getProductIdList();
    const idExists = list.findIndex((index) => index.id === product.productId);
    if (idExists === -1) {
      const error = new Error('Product not found');
      error.code = 404;
      throw error;
    }
  },
  async getProductIdList() {
    const list = await salesModel.getAllProductsId();
    return list[0];
  },
};

module.exports = salesService;