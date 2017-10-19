
// Dependancies
var router = require('express').Router();
var pg = require('pg');
var path = require('path');
var pool = require('../modules/database-config');
var encryptLib = require('../modules/encryption');



// Handles request for HTML file
router.get('/', function(req, res, next) {
  console.log('get /register route');
  res.sendFile(path.resolve(__dirname, '../../public/views/templates/register.html'));
});

// Handles POST request
router.post('/', function(req, res, next) {
  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    companyId : req.body.companyId
  };
  console.log('saveUser: ', saveUser);

  pool.connect(function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO users (username, password, firstname, lastname, companies_id) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      [saveUser.username, saveUser.password, saveUser.firstname, saveUser.lastname, saveUser.companyId],
        function (err, result) {
          client.end();

          if(err) {
            console.log('Error inserting data: ', err);
            next(err);
          } else {
            res.redirect('/');
          }
        });
  }); // end pool connect
}); // end of router post


module.exports = router;
