
var router = require('express').Router();
var pg = require('pg');
var pool = require('../modules/database-config');


// gets all companies for add user viewHeadings
  router.get('/getAllCompanies', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM companies ORDER BY companyname ASC")
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
  });//end of router.get

// gets all companies for add user viewHeadings
  router.get('/getAllEmployeeNames', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT firstname, lastname FROM users ORDER BY lastname ASC")
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
  });//end of router.get







module.exports = router;
