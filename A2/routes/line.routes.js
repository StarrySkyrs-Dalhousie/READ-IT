var express = require('express');
var router = express.Router();
var con = require('../db/connection')

//get all line
router.get('/', function(req, res) {
    const sql = 'Select * from line_01';
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});

//get specific line
router.get('/:id', function(req, res) {
  const { id } = req.params;
  const sql = 'Select * from line_01 WHERE poNo = "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//add new line
router.post('/add', function(req, res, next){
  var partNo = ""+req.body.part_no
  var poNo = req.body.poNo
  var price = req.body.price
  var unit = req.body.unit
  const sql = "INSERT INTO `line_01` (`lineNo`, `poNo`, `partNo`, `linePrice`, `lineUnit`) VALUES (NULL, '"+poNo+"', '"+partNo+"', '"+price+"', '"+unit+"')"
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a line")
    res.json(result);
  });
})
//remove line 
router.get('/delete/:id', function(req, res, next){
  var {id} = req.params;
  const sql = "DELETE FROM `line_01` WHERE `line_01`.`lineNo` = 19 AND `line_01`.`poNo` = '"+id+"'"
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Delete a line")
    res.json(result);
  });
})

module.exports = router;
