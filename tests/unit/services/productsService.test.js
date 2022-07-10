const { expect } = require('chai');
const productsService = require('../../../services/productsService')

const saleNotFound = 'Sale not found';

describe('Testes da camada productsModel', function () {
  describe('#checkId', function () {
    it('se ao receber um id inexistente retorna erro', async function () {
      const result = await productsService.checkId(1);
      expect(result).to.be.equal(true);
    })
  })
})