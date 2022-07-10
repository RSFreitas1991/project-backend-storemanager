const { expect } = require('chai');
const sinon = require('sinon')
const productsController = require('../../../controllers/productsController')

const saleNotFound = 'Sale not found';

describe('Testes da camada productsModel', function () {
  describe('#getList', function () {
    it('se ao receber uma requisição get retorna a lista de Vendas', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res)
      res.json = sinon.stub();

      await productsController.getList(req, res);
      expect(res.status.calledWith(204));
    })
  })
})