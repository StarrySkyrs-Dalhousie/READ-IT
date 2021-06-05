import express from 'express';
var con = require('../db/connection');
const router = express.Router();

router.get('/pos', function(req, res, next) {
  const sql = "Select * from `purchase Order`"
  con.query(sql, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});


export default router;
