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

//update purchase order_01
router.get('/po/pending/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `purchase order_01` SET `status` = 'Pending' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+req.body.clientCompId+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//cancel order
router.get('/po/cancel/:id', function(req, res, next) {
    const { id } = req.params;
    const sql = "UPDATE `purchase order_01` SET `status` = 'Cancelled' WHERE `purchase order_01`.`poNo` = '"+id+"' AND `purchase order_01`.`clientCompId` = '"+req.body.clientCompId+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;
