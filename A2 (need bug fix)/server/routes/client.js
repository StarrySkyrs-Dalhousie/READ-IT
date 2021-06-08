import express from 'express';
var con = require('../db/connection')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const sql = "SELECT * FROM client"; //string variable
  con.query(sql, function(err, result){
  	if (err) throw err; //function stop if there is error
  	res.json(result) //translate the result into json format
  }) 
});

router.get('/:id', (req, res) => {

  const { id } = req.params; //possibility 1
  // const id = req.params.id; possibility 2
  const sql = `SELECT * FROM client where clientCompId=${id}`;
  con.query(sql, function(err, result){
  	if (err) throw err; //function stop if there is error
  	res.json(result) //translate the result into json format
  }) 
});

export default router;
