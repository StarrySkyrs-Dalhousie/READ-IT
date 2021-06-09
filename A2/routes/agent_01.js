import express from 'express';
var con = require('../db/connection');
const router = express.Router();

// List parts with partNO, partName, and quantities on stock.
router.get('/parts', function(req, res, next){
  const sql_parts = "Select partNo, partName, part_QOH from part";
  con.query(sql_parts, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about the certain part.
router.get('/parts/:id', function(req, res, next){
  const { id } = req.params;
  const sql_certainParts = 'Select * from part WHERE partNo = "'+id+'"';
  con.query(sql_certainParts, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about clients.
router.get('/clients', function(req, res, next){
  const sql_clients = "Select * from client";
  con.query(sql_clients, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about the certain client.
router.get('/clients/:id', function(req, res, next){
  const { id } = req.params;
  const sql_certainParts = 'Select * from client WHERE clientCompId = "'+id+'"';
  con.query(sql_certainParts, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about POs.
router.get('/pos', function(req, res, next) {
  const sql_pos = "Select * from `purchase Order`";
  con.query(sql_pos, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

// List all info about one PO by searching its PO number.
router.get('/pos/:id', function(req, res, next){
  const { id } = req.params;
  const sql_certainPOs = 'Select * from `purchase Order` WHERE poNo = "'+id+'"';
  con.query(sql_certainPOs, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

export default router;
