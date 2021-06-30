var mysql = require('mysql');
const config = require("../config/db.config");

con = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DATABASE
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = con;