const salesService = require('../services/salesService');

const salesController = {
  async AddSale(req, res) {
    try {
      const product = req.body;
      await salesService.addSale(product[0]);
      res.status(201).json({ message: 'deu certo' });
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
};

module.exports = salesController;