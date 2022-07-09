const connection = require('./connection');

const getProductById = async (id) => {
  const sql = 'select * from StoreManager.products where id = ?;';
  const result = await connection.query(sql, [id]);
  return result[0];
};

const getAllProducts = async () => {
  const sql = 'select * from StoreManager.products;';
  const result = await connection.query(sql);
  return result[0];
};

const addProduct = async (product) => {
  const sql = 'insert into StoreManager.products (name) values (?);';
  const result = await connection.query(sql, [product]);
  return result;
};

const updateProductNameById = async (name, id) => {
  const sql = 'UPDATE StoreManager.products SET name = ? WHERE id = ?;';
  const result = await connection.query(sql, [name, id]);
  return result;
};

const deleteProduct = async (id) => {
  const sql = 'DELETE FROM StoreManager.products WHERE id = ?;';
  const result = await connection.query(sql, [id]);
  return result;
};

module.exports = {
  getProductById,
  getAllProducts,
  addProduct,
  updateProductNameById,
  deleteProduct,
};
