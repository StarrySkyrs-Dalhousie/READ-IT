
var express = require('express');
var router = express.Router();
var uuid = require('react-uuid');
var con = require('../db/connection')

/* GET home page. */
router.get('/clients', function(req, res, next) {
  const sql = "Select * from client_01";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/parts', function(req, res, next) {
  const sql = "Select * from part_01";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/parts/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from part_01 WHERE partNo = "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/lines/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from line_01 WHERE poNo = "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/pos/processed', function(req, res, next) {
  const sql1 = "Select * from `purchase order_01` where status='Processed'";
  con.query(sql1, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

router.get('/pos/pending', function(req, res, next) {
  const sql2 = "Select * from `purchase order_01` where status='Pending'"
  con.query(sql2, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});
router.get('/pos', function(req, res, next) {
  const sql2 = "Select * from `purchase order_01`"
  con.query(sql2, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

router.get('/pos/user/:id', function(req, res, next) {
  const { id } = req.params;
  const sql2 = "SELECT * FROM `purchase order_01` WHERE `clientCompId` = '"+id+"'"
  con.query(sql2, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});


router.get('/pos/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from `purchase order_01` where poNo= "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      console.log("Fetching all pos")
      res.json(result);
  });
});

router.get('/clients/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from `client_01` where clientCompId= "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

router.post('/addClient', function(req, res, next){
  const sql = 'INSERT INTO `client_01` (`clientCompName`, `clientCity`, `clientCompPassword`, `moneyOwed`) VALUES ('+req.body.name+', '+req.body.city+', '+req.body.password+', '+req.body.owed+');'
  con.query(sql, function(err, result){
    if (err) throw err;
    res.json(result);
  });
})

router.get('/process/:id', function(req, res, next){
  const { id } = req.params;
  var clientCompId = ""+req.body.clientCompId
  const sql = "UPDATE `purchase order_01` SET `status` = 'Processed' WHERE `Purchase Order`.`poNo` = '"+id+"' AND `Purchase Order`.`clientCompId` = '3bb6de1477974ed28bb5a'"
  console.log(sql)
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})
router.get('/return/:id', function(req, res, next){
  const { id } = req.params;
  const sql = "UPDATE `purchase order_01` SET `status` = 'Pending' WHERE `Purchase Order`.`poNo` = '"+id+"' AND `Purchase Order`.`clientCompId` = '3bb6de1477974ed28bb5a'"
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})



router.post('/update/:id', function(req, res, next){
  const { id } = req.params;
  var partNo = ""+req.body.partNo
  var old_price = ""+req.body.old_price
  var description = ""+req.body.part_description
  var name = req.body.part_name
  var price = req.body.part_current_price
  var qty = req.body.part_qty
  const sql = "UPDATE `part_01` SET `partName` = '"+name+"', `partDescription` = '"+description+"', `currentPrice` = '"+price+"', `part_QOH` = '"+qty+"' WHERE `Part`.`partNo` = "+id+" AND CONCAT(`part_01`.`currentPrice`) = '"+old_price+"'"
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Part updated")
    res.json(result);
  });
})

 router.post('/newPart', function(req, res, next){
  var partNo = ""+req.body.partNo
  var description = ""+req.body.part_description
  var name = req.body.part_name
  var price = req.body.part_current_price
  var qty = req.body.part_qty
  const sql = "INSERT INTO `part_01` (`partNo`, `partName`, `partDescription`, `currentPrice`, `part_QOH`) VALUES (NULL, '"+name+"', '"+description+"', '"+price+"', '"+qty+"')"
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})
router.post('/addLine', function(req, res, next){
  var partNo = ""+req.body.part_no
  var poNo = req.body.poNo
  var price = req.body.price
  var unit = req.body.unit
  var qty = req.body.part_qty
  const sql = "INSERT INTO `line_01` (`lineNo`, `poNo`, `partNo`, `linePrice`, `lineUnit`) VALUES (NULL, '"+poNo+"', '"+partNo+"', '"+price+"', '"+unit+"')"
  console.log(sql)
  
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})
router.post('/createPO', function(req, res, next){
  var datePO = new Date();
  var date = datePO.getFullYear()+"-"+datePO.getMonth()+"-"+datePO.getDate()
  var poNo = req.body.poNo
  var status = req.body.status
  var clientCompId = req.body.clientCompId
  var poPrice = req.body.poPrice
  const sql = "INSERT INTO `purchase order_01` (`poNo`, `datePO`, `status`, `clientCompId`, `poPrice`) VALUES ('"+poNo+"', '"+date+"', '"+status+"', '"+clientCompId+"', '0.00')"
  //const sql = "INSERT INTO `Line` (`lineNo`, `poNo`, `partNo`, `linePrice`, `lineUnit`) VALUES (NULL, '"+poNo+"', '"+partNo+"', '"+price+"', '"+unit+"')"
  console.log(sql)
  
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})
//update `Purchase Order` SET `poPrice` = (Select sum(LINE_PRICE) from LINE where poNo = '22340cd51b5f4683840') WHERE poNo='22340cd51b5f4683840'

module.exports = router;
