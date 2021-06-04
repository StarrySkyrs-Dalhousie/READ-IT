import express from 'express';
var con = require('../db/connection');

const router = express.Router();

/* GET all clients */
// router.get('/', function(req, res, next) {
//     const sql = "Select * from Agent";
//     con.query(sql, function(err, result){
//         if (err) throw err;
//         res.json(result);
//     });
// });

export default router;
