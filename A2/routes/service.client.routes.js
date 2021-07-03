var express = require('express');
var router = express.Router();
var con = require('../db/connection')

//creating new purchase order with default set at 0.00 poPrice and date as current date
router.post('/order/add', function(req, res, next){
    var datePO = new Date();
    var date = datePO.getFullYear()+"-"+datePO.getMonth()+"-"+datePO.getDate()
    var poNo = makeid(5); 
    var clientCompId = req.body.clientCompId
    const sql = "INSERT INTO `purchase order_01` (`poNo`, `datePO`, `status`, `clientCompId`, `poPrice`) VALUES ('"+poNo+"', '"+date+"', 'Created', '"+clientCompId+"', '0.00')"
    con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
    });
  })
  
  /**
   * 
   * @param {length} length 
   * @returns random id
   * @author https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
   */
   function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }

//update client
router.get('/update/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `client_01` SET `clientCompName` = '"+req.body.clientCompName+"', `clientCity` = '"+req.body.clientCity+"' WHERE `client_01`.`clientCompId` = '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});

//update purchase order_01
router.get('/order/pending/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `purchase order_01` SET `status` = 'Pending' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+req.body.clientCompId+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//update purchase order_01
router.get('/order/process/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `purchase order_01` SET `status` = 'Processed' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+req.body.clientCompId+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//cancel order
router.get('/order/cancel/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `purchase order_01` SET `status` = 'Cancelled' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+req.body.clientCompId+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/order/empty/:id', function(req, res, next) {
    const { id } = req.params;
    const sql1= "CALL lineRemove('"+id+"');"
    con.query(sql1, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//const sql1= "CALL lineRemove('"+id+"');"


module.exports = router;
