var express = require('express');
var router = express.Router();
var con = require('../db/connection')

//get all parts
router.get('/', function(req, res, next) {
  const sql = "Select * from part_01";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//get specific part
router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from part_01 WHERE partNo = "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//UPDATE `part_01` SET `currentPrice` = '35.99' WHERE `part_01`.`partNo` = 14
router.get('/pricechange/:id', function(req, res){
  const {id} = req.params;
  const sql = "UPDATE `part_01` SET `currentPrice` = '"+req.body.price+"' WHERE `part_01`.`partNo` = "+id+""
  con.query(sql, function(err, res) {
    if(err) throw err;
    res.json(result);
  })
})


//update part 
router.get('/update/:id', function(req, res, next){
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


//add new part
 router.post('/add', function(req, res, next){
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

module.exports = router;
