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

module.exports = {
  getProductById,
  getAllProducts,
};
