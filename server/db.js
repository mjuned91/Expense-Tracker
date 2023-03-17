const Pool = require("pg").Pool;

const pool = new Pool({
  user: "test",
  password: "password",
  host: "localhost",
  port: "5432",
  atabase: "pern_transactions",
});

module.exports = pool;