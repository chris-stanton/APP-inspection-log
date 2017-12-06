
///////////////////
// Passport file //
///////////////////


// Dependancies
var router = require('express').Router();
var passport = require('passport');
var path = require('path');
var pool = require('../modules/database-config');


// Handles login form POST from index.html
router.post('/',
  passport.authenticate('local', { // local strategy - userStrategy.js
      // request stays within node/express and is routed as a new request
      successRedirect: '/user'   // goes to routes/user.js
  })
);

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  console.log('request for index');
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/*', function(req, res) {
  console.log('404 : ', req.params);
  res.sendStatus(404);
});


module.exports = router;
