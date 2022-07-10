const { expect } = require('chai');
const salesModel = require('../../../models/salesModel')

const notFoundMessage = {
  "message": "Product not found"
}

describe('Testes da camada productsModel', function () {
  describe('#getSaleById', function () {
    it('Ao mandar um id existente, retorna o row desejado', async function () {
      const result = await salesModel.getSaleById(1);
      expect(result.length).to.be.least(1);
    })
  })
  describe('#getAllProductsId', function () {
    it('se ao receber uma requisição get retorna a lista de produtos', async function () {
      const result = await salesModel.getAllProductsId();
      expect(result.length).to.be.least(1);
    })
  })
})