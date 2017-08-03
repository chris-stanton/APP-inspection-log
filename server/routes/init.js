
var router = require('express').Router();
var pg = require('pg');
var pool = require('../modules/database-config');


// gets all companies for add user viewHeadings
  router.get('/getAllCompanies', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT id, companyname, city, state FROM companies ORDER BY companyname ASC")
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

// gets all employees names
  router.get('/getAllEmployeeNames', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT id, firstname, lastname FROM users ORDER BY lastname ASC")
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

// gets all inspection sites by ID
  router.get('/getAllInspectionSites', function (req, res) {
  var inspectionSite_Id = req.headers;
  // var inspectionSite_Id = 1;
  console.log(inspectionSite_Id);
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM inspection_sites WHERE companies_id=$1 AND active='true' ORDER BY id ASC",[inspectionSite_Id])
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
