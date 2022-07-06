const express = require('express');
const productsRoute = require('./routes/productsRoute');

const app = express();
app.use(express.json());

app.use('/products', productsRoute);

/* app.get('/products/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = await productsModel.getProductById(id);
    if (product.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(product[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/products', async (req, res) => {
  try {
    const products = await productsModel.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;