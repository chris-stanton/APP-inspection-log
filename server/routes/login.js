
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
            console.log('error updating database:', err);
              res.sendStatus(500);
          });
      });// end of .then
  });// end router.put





module.exports = router;
