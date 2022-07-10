const { expect } = require('chai');
const sinon = require('sinon')
const salesController = require('../../../controllers/salesController')

const saleNotFound = 'Sale not found';

describe('Testes da camada productsModel', function () {
  describe('#productSaleList', function () {
    it('se ao receber uma requisição get retorna status 200', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res)
      res.send = sinon.stub().returns();
      res.json = sinon.stub();

      await salesController.productSaleList(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })
  })
})