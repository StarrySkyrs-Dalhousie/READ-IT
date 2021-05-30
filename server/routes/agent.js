import express from 'express';
var con = require('../db/connection');

const router = express.Router();

/* GET all users */
// router.get('/clients', function(req, res, next) {
//     const sql = "Select * from Client";
//     con.query(sql, function(err, result){
//         if (err) throw err;
//         res.json(result);
//     });
// });

export default router;
