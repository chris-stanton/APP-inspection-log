
var router = require('express').Router();
var pg = require('pg');
var pool = require('../modules/database-config');


// adds new user to DB
  router.post('/addNewUser', function(req, res){
    var newUser = req.body;
    pool.connect()
      .then(function (client) {
        client.query('INSERT INTO users (username, password, firstName, lastName, companies_id) VALUES ($1, $2, $3, $4, $5)',
          [newUser.username, newUser.password, newUser.firstName, newUser.lastName, newUser.companyId])
          .then(function (result) {
            client.release();
              res.sendStatus(200);
          }).catch(function (err) {
            console.log('error updating user database:', err);
              res.sendStatus(500);
          });
      });// end of .then
  });// end router.put

// adds new company profile to DB
  router.post('/addNewCompany', function(req, res){
    var newCompany = req.body;
    pool.connect()
      .then(function (client) {
        client.query('INSERT INTO companies (companyname, streetAddress, city, state, zipCode, country) VALUES ($1, $2, $3, $4, $5, $6)',
          [newCompany.companyName, newCompany.streetAddress, newCompany.city, newCompany.state, newCompany.zipCode, newCompany.country])
          .then(function (result) {
            client.release();
              res.sendStatus(200);
          }).catch(function (err) {
            console.log('error updating company database:', err);
              res.sendStatus(500);
          });
      });// end of .then
  });// end router.put




module.exports = router;
