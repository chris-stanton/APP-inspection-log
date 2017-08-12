
var router = require('express').Router();
var pg = require('pg');
var pool = require('../modules/database-config');


// gets all companies for add user viewHeadings
  router.get('/getAllCompanies', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT id, companyname, city, state FROM companies WHERE active='true' ORDER BY companyname ASC")
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

// gets all Active employees names
  router.get('/getAllEmployeeNames', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT id, firstname, lastname FROM users WHERE active='true' ORDER BY lastname ASC")
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

// gets all inspection sites by companies_id and active true status
  router.get('/getAllInspectionSites', function (req, res) {
  var company_Id = req.headers;
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM inspection_sites WHERE companies_id=$1 AND active='true' ORDER BY id ASC",[company_Id.company_id])
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

// gets user by company id
  router.get('/getAllInspectionSites', function (req, res) {
  var company_Id = req.headers;
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM inspection_sites WHERE companies_id=$1 AND active='true' ORDER BY id ASC",[company_Id.company_id])
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

// gets all users by company_id
  router.get('/getUserByCompanyId', function (req, res) {
  var company_Id = req.headers;
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM users WHERE companies_id=$1 AND active='true' ORDER BY id ASC",[company_Id.company_id])
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

  router.get('/getInspectionSitesByUser_id', function (req, res) {
  var user_Id = req.headers;
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM inspection_sites WHERE users_id=$1",[user_Id.user_id])
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
