import express from 'express';
var con = require('../db/connection');
const router = express.Router();

// List parts with partNO, partName, and quantities on stock.
router.get('/parts', function(req, res, next){
  const sql_parts = "Select partNo_01, partName_01, part_QOH_01 from part_01";
  con.query(sql_parts, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about the certain part.
router.get('/parts/:id', function(req, res, next){
  const { id } = req.params;
  const sql_certainParts = 'Select * from part_01 WHERE partNo_01 = "'+id+'"';
  con.query(sql_certainParts, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about clients.
router.get('/clients', function(req, res, next){
  const sql_clients = "Select * from client_01";
  con.query(sql_clients, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about the certain client.
router.get('/clients/:id', function(req, res, next){
  const { id } = req.params;
  const sql_certainParts = 'Select * from client_01 WHERE clientCompId_01 = "'+id+'"';
  con.query(sql_certainParts, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about POs.
router.get('/pos', function(req, res, next) {
  const sql_pos = "Select * from `purchase Order_01`";
  con.query(sql_pos, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about one PO by searching its PO number.
router.get('/pos/:id', function(req, res, next){
  const { id } = req.params;
  const sql_certainPOs = 'Select * from `purchase Order_01` WHERE poNo_01 = "'+id+'"';
  con.query(sql_certainPOs, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

export default router;
