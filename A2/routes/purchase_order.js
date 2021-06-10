var express = require('express');
var router = express.Router();
var con = require('../db/connection')

//return all purchase order
router.get('/', function(req, res, next) {
    const sql2 = "Select * from `purchase order_01`"
    con.query(sql2, function(err, result){
      if (err) throw err;
      res.json(result);
    });
});

//return purchase order by id
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = 'Select * from `purchase order_01` where poNo= "'+id+'"';
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
  });
  
//get all purchase order that are processed
router.get('/processed', function(req, res, next) {
  const sql1 = "Select * from `purchase order_01` where status='Processed'";
  con.query(sql1, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//get all purchase order that are created
router.get('/created', function(req, res, next) {
    const sql2 = "Select * from `purchase order_01` where status='Created'"
    con.query(sql2, function(err, result){
      if (err) throw err;
      res.json(result);
    });
  });

//get all purchase order that are pending
router.get('/pending', function(req, res, next) {
  const sql2 = "Select * from `purchase order_01` where status='Pending'"
  con.query(sql2, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

//get purchase order of specific users
router.get('/client/:id', function(req, res, next) {
  const { id } = req.params;
  const sql2 = "SELECT * FROM `purchase order_01` WHERE `clientCompId` = '"+id+"'"
  con.query(sql2, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

//update purchase order to processed
router.get('/process/:id', function(req, res, next){
  const { id } = req.params;
  var clientCompId = ""+req.body.clientCompId
  const sql = "UPDATE `purchase order_01` SET `status` = 'Processed' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+clientCompId+"'"
  con.query(sql, function(err, result){
    if (err) throw err;
    res.json(result);
  });
})

//update purchase order status back to Pending
router.get('/return/:id', function(req, res, next){
  const { id } = req.params;
  var clientCompId = ""+req.body.clientCompId
  const sql = "UPDATE `purchase order_01` SET `status` = 'Pending' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+clientCompId+"'"
  con.query(sql, function(err, result){
    if (err) throw err;
    res.json(result);
  });
})

//creating new purchase order with default set at 0.00 poPrice and date as current date
router.post('/createPO', function(req, res, next){
  var datePO = new Date();
  var date = datePO.getFullYear()+"-"+datePO.getMonth()+"-"+datePO.getDate()
  var poNo = req.body.poNo
  var status = req.body.status
  var clientCompId = req.body.clientCompId
  const sql = "INSERT INTO `purchase order_01` (`poNo`, `datePO`, `status`, `clientCompId`, `poPrice`) VALUES ('"+poNo+"', '"+date+"', '"+status+"', '"+clientCompId+"', '0.00')"
  con.query(sql, function(err, result){
    if (err) throw err;
    res.json(result);
  });
})

module.exports = router;