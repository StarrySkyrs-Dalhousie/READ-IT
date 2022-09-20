const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
var con = require('../db/connection');

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

isAgent = (req, res, next) => {
    const agent_request = "Select * from `client_01` where clientCompId= '"+req.userId+"' AND role='agent'";
    con.query(agent_request, function(err, result){
        if (err) {res.status(500).send({message: err})};
        return;
    });
};

isClient = (req, res, next) => {
    const client_request = "Select * from `client_01` where clientCompId= '"+req.userId+"' AND role='client'";
    con.query(client_request, function(err, result){
        if (err) {res.status(500).send({message: err})};
        return;
    });
};

const authJwt = {
  verifyToken,
  isClient,
  isAgent
};
module.exports = authJwt;
