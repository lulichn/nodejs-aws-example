const pool = require('../config/db');

const findByUsername = async (username) => {
  return await pool.query('SELECT * from users where username = ?', [username]);
};

module.exports = {
  findByUsername,
};
