const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'laurence',
  password: 'Yummyfood11',
  database: 'portfolio',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;