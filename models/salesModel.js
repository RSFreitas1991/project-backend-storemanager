const connection = require('./connection');

const addProductSale = async (product) => {
  const getSaleId = 'select * from StoreManager.sales;';
  const saleList = await connection.query(getSaleId);
  const lastSale = saleList[0].pop();
  const { id } = lastSale;
  const sql = 'INSERT INTO StoreManager.sales_products'
   + '(sale_id, product_id, quantity) VALUES (?, ?, ?);';
  const result = await connection.query(sql, [id, product.productId, product.quantity]);
  return result;
};

const addSale = async (product) => {
  const sql = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const result = await connection.query(sql);
  await addProductSale(product);
  return result;
};

module.exports = {
  addSale,
  addProductSale,
};