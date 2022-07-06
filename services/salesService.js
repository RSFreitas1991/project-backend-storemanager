const salesModel = require('../models/salesModel');

const salesService = {
  async addSale(product) {
    const included = await salesModel.addSale(product);
    return included;
  },
};

module.exports = salesService;