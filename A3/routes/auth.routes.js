const config = require("../config/auth.config");
var express = require('express');
var router = express.Router();
var con = require('../db/connection')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

router.post('/signup', function(req, res) {
    const {username, name, city, role, password} = req.body;
    const sql = "INSERT INTO `client_01` (`clientCompId`, `clientCompName`, `clientCity`, `clientCompPassword`, `moneyOwed`, `role`) VALUES ('"+username+"', '"+name+"', '"+city+"', '"+password+"', '0.0', '"+role+"')"
    con.query(sql, function(err, result){
        if (err) throw err;
        res.send({ message: "User was registered successfully!" });
    });
});
router.post('/signin', function(req, res, next) {
    const {username} = req.body;
    const sql = "Select * from `client_01` where clientCompId= '"+username+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        var string=JSON.stringify(result);
        var json =  JSON.parse(string);
        if(json[0] && req.body.password == json[0].clientCompPassword){
            var token = jwt.sign({ id: json[0].clientCompId }, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                id: json[0].clientCompId,
                username: json[0].clientCompName,
                roles: json[0].role,
                accessToken: token
            });
            
        }else{
            if (err) throw err;
            res.send(null)
        }
    });
});

module.exports = router;

