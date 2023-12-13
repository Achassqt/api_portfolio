const mysql = require("mysql2");
const dbconfig = require("../config/db.config");

const pool = mysql.createPool({
  host: dbconfig.HOST,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DB,
  ...dbconfig.POOL_CONFIG,
});

module.exports = pool;
