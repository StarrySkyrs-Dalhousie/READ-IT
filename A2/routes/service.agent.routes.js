var express = require('express');
var router = express.Router();
var con = require('../db/connection')

//update client
router.get('/client/update/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `client_01` SET `clientCompName` = '"+req.body.clientCompName+"', `clientCity` = '"+req.body.clientCity+"' WHERE `client_01`.`clientCompId` = '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});

//update part name
router.get('/part/name/update/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = "UPDATE `part_01` SET `partName` = '"+req.body.partName+"' WHERE `part_01`.`partNo` = '"+id+"'";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

//update part current price
router.get('/part/price/update/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `part_01` SET `currentPrice` = '"+req.body.currentPrice+"' WHERE `part_01`.`partNo` = '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//update part minimum
router.get('/part/minimum/update/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `part_01` SET `partMinimum` = '"+req.body.partMinimum+"' WHERE `part_01`.`partNo` = '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//update part description
router.get('/part/description/update/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `part_01` SET `partDescription` = '"+req.body.partDescription+"' WHERE `part_01`.`partNo` = '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//update part picture
router.get('/part/picture/update/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `part_01` SET `partPicture` = '"+req.body.partPicture+"' WHERE `part_01`.`partNo` = '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//update part quantity on hand
router.get('/part/quantity/update/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `part_01` SET `part_QOH` = '"+req.body.part_QOH+"' WHERE `part_01`.`partNo` = '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});



//update purchase order_01
router.get('/po/process/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `purchase order_01` SET `status` = 'Processed' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+req.body.clientCompId+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/po/cancel/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `purchase order_01` SET `status` = 'Cancelled' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+req.body.clientCompId+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;
