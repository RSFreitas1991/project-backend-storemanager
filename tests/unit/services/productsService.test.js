const { expect, use } = require('chai');
const chaiAsPromised = require('chai-as-promised')
const productsService = require('../../../services/productsService')

use(chaiAsPromised);

const saleNotFound = 'Sale not found';

describe('Testes da camada productsModel', function () {
  describe('#checkId', function () {
    it('se ao receber um id existente retorna true', async function () {
      const result = await productsService.checkId(1);
      expect(result).to.be.equal(true);
    })
  })
  describe('#checkId', function () {
    it('se ao receber um id inexistente retorna erro', async function () {
      const result = await productsService.checkId(1);
      expect(productsService.checkId(99)).to.be.rejectedWith(saleNotFound)
    })
  })
})