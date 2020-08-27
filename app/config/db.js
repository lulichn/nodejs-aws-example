const mysql = require('mysql2/promise');

const db_setting = {
  host: 'localhost',
  user: 'mysql',
  password: 'mysql',
  database: 'mysql',
};

const pool = mysql.createPool(db_setting);

module.exports = pool;
