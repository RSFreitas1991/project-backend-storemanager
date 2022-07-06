const productsModel = require('../models/productsModel');

const productsService = {
  async checkId(id) {
    const product = await productsModel.getProductById(id);
    if (product.length === 0) throw new Error('Product not found');
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
};

module.exports = productsService;