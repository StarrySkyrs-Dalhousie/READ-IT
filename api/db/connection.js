var mysql = require('mysql');

con = mysql.createConnection({
  host: "db.cs.dal.ca",
  user: "acamara",
  password: "zhgh9GmuqLjfAVMyRr33xFqDQ",
  database: "acamara"
});

// con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "acamara"
// });
// con = mysql.createConnection({
//   host: "sql5.freemysqlhosting.net",
//   user: "sql5414023",
//   password: "EePL5YLMgd",
//   database: "sql5414023"
// });
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = con;