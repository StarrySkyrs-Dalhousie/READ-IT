
var express = require('express');
var router = express.Router();
var con = require('../db/connection')

//return all clients
router.get('/', function(req, res) {
  const sql = "Select * from client_01";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//return specific client
router.get('/:id', function(req, res) {
  const { id } = req.params;
  const sql = 'Select clientCity, clientCompId, clientCompName, moneyOwed, role from `client_01` where clientCompId= "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//return client by city name
router.get('/city/:id', function(req, res) {
  const { id } = req.params;
  const sql = 'Select * from `client_01` where clientCity= "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//add new client 
router.post('/add', function(req, res){
  const sql = 'INSERT INTO `client_01` (`clientCompId`, `clientCompName`, `clientCity`, `clientCompPassword`, `moneyOwed`) VALUES ('+req.body.id+','+req.body.name+', '+req.body.city+', '+req.body.password+', '+req.body.owed+');'
  con.query(sql, function(err, result){
    if (err) throw err;
    res.json(result);
  });
})

module.exports = router;
