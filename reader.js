const duckdb = require('duckdb');
var db = new duckdb.Database(':memory:');

db.all("SELECT * FROM READ_PARQUET('000.parquet')", function(err, res) {
    if (err) {
      throw err;
    }
    console.log(res)
  });