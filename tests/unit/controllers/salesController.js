const { expect } = require('chai');
const sinon = require('sinon')
const salesController = require('../../../controllers/salesController')

const saleNotFound = 'Sale not found';

describe('Testes da camada productsModel', function () {
  describe('#productSaleList', function () {
    it('se ao receber uma requisição get retorna a lista de Vendas', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res)
      res.json = sinon.stub();

      await salesController.productSaleList(req, res);
      expect(res.status.calledWith(204));
    })
  })
})