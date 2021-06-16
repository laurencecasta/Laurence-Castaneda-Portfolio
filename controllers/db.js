const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'owhnslar',
  password: 'vj582V8P-O74Ub7VyL-BBCZbgRbu46uA',
  database: 'owhnslar',
  host: 'batyr.db.elephantsql.com',
  port: 5432,
});

module.exports = pool;
