const { expect } = require('chai');
const salesService = require('../../../services/salesService')

const saleNotFound = 'Sale not found';

describe('Testes da camada productsModel', function () {
  describe('#getAllProductSales', function () {
    it('se ao receber uma requisição get retorna a lista de Vendas', async function () {
      const result = await salesService.getAllProductSales();
      expect(result.length).to.be.least(1);
    })
  })
  describe('#getProductIdList', function () {
    it('se ao receber uma requisição get retorna a lista de Id de produtos', async function () {
      const result = await salesService.getProductIdList();
      expect(result.length).to.be.least(1);
    })
  })
  describe('#getProductSalesById', function () {
    it('se ao receber uma requisição get retorna a lista de vendas de um ID', async function () {
      const result = await salesService.getProductSalesById(1);
      expect(result.length).to.be.least(1);
    })
  })
})