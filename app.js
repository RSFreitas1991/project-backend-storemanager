const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());
const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456Rafa*',
});

app.get('/products/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const sql = `select * from StoreManager.products where id = ${id};`;
    const result = await db.query(sql);
    if (result[0].length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(result[0][0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/products', async (req, res) => {
  try {
    const sql = 'select * from StoreManager.products;';
    const result = await db.query(sql);
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;