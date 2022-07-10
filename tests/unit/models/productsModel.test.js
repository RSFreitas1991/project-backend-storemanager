const { expect } = require('chai');
const productsModel = require('../../../models/productsModel')

const productId1 = {
  "id": 1,
  "name": "Martelo de Thor"
}
const notFoundMessage = {
  "message": "Product not found"
}

describe('Testes da camada productsModel', function () {
  describe('#getProductById', function () {
    it('Ao mandar um id existente, retorna o row desejado', async function () {
      const result = await productsModel.getProductById(1);
      expect(result[0].name).to.be.equal('Martelo de Thor');
    })
  })
  describe('#getAllProducts', function () {
    it('se ao receber uma requisição get retorna a lista de produtos', async function () {
      const result = await productsModel.getAllProducts();
      expect(result.length).to.be.least(1);
    })
  })
})