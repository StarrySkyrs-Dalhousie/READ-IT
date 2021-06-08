var mysql = require('mysql');

con = mysql.createConnection({
  host: "db.cs.dal.ca",
  user: "acamara",
  password: "zhgh9GmuqLjfAVMyRr33xFqDQ",
  database: "acamara"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
});

module.exports = con;