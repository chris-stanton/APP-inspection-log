
var pg = require('pg');
var config = {
  database: 'inspection-log',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};//end of config

module.exports = new pg.Pool(config);
