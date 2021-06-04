var mysql = require('mysql');

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "acamara"
});

//change database config into your local machine 

con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
});
module.exports = con;