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

const addSale = async () => {
  const sql = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  await connection.query(sql);
  const getSaleId = 'select * from StoreManager.sales;';
  const saleList = await connection.query(getSaleId);
  const lastSale = saleList[0].pop();
  const { id } = lastSale;
  return id;
};

const getAllProductsId = async () => {
  const sql = 'select * from StoreManager.products;';
  const result = await connection.query(sql);
  return result;
};

const getAllProductSales = async () => {
  const sql = 'SELECT '
  + 'StoreManager.sales.id saleId, '
  + 'StoreManager.sales.date, '
  + 'StoreManager.sales_products.product_id productId, '
  + 'StoreManager.sales_products.quantity '
  + 'FROM StoreManager.sales '
  + 'JOIN StoreManager.sales_products '
  + 'ON StoreManager.sales_products.sale_id = StoreManager.sales.id '
  + 'ORDER BY saleId ASC, productId ASC;';
  const result = await connection.query(sql);
  return result;
};

const getProductSalesById = async (id) => {
  const sql = 'SELECT '
     + 'StoreManager.sales.date, '
    + 'StoreManager.sales_products.product_id productId, '
    + 'StoreManager.sales_products.quantity '
    + 'FROM StoreManager.sales '
    + 'JOIN StoreManager.sales_products '
    + 'ON StoreManager.sales_products.sale_id = StoreManager.sales.id '
    + 'WHERE StoreManager.sales.id = ? '
    + 'ORDER BY StoreManager.sales.id ASC, productId ASC;';
  const result = await connection.query(sql, [id]);
  return result;
};
const getSaleById = async (id) => {
  const sql = 'select * from StoreManager.sales where id = ?;';
  const result = await connection.query(sql, [id]);
  return result[0];
};

module.exports = {
  addSale,
  addProductSale,
  getAllProductsId,
  getAllProductSales,
  getProductSalesById,
  getSaleById,
};