
///////////////////
// Passport file //
///////////////////

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var encryptLib = require('../modules/encryption');
var connection = require('../modules/database-config.js');
var pg = require('pg');

// connection to DB
var config = {
  user: 'chrisstanton', //env var: PGUSER
  database: 'inspection-log', //env var: PGDATABASE
  password: 'null', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 1500, // 1.5s how long a client is allowed to remain idle before being closed
};

//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);
console.log('clients connected: ', connectCount);

var acquireCount = 0
pool.on('acquire', function (client) {
  acquireCount++;
  console.log('client acquired: ', acquireCount);
});

var connectCount = 0
pool.on('connect', function () {
  connectCount++;
  console.log('client connected: ', connectCount);
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('called deserializeUser - pg');

  pool.connect(function (err, client, release) {
    if(err) {
      console.log('connection err ', err);
      release();
      done(err);
    };

    var user = {};

    client.query("SELECT * FROM users WHERE id = $1", [id], function(err, result) {

      // Handles Errors
      if(err) {
        console.log('query err ', err);
        done(err);
        release();
      }
      user = result.rows[0];

      release();

      if(!user) {
          // user not found
          return done(null, false, {message: 'Incorrect credentials.'});
      } else {
        // user found
        done(null, user);
      }
    });
  });
});

// Does actual work of logging in
passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
    }, function(req, username, password, done) {
	    pool.connect(function (err, client, release) {
	    	console.log('called local - pg');

        // assumes the username will be unique, thus returning 1 or 0 results
        client.query("SELECT * FROM users WHERE username = $1", [username],
          function(err, result) {
            var user = {};

            console.log('here');

            // Handle Errors
            if (err) {
              console.log('connection err ', err);
              done(null, user);
            }

            release();
            console.log(connectCount);

            if(result.rows[0] != undefined) {
              user = result.rows[0];
              console.log('User obj', user);
              // Hash and compare
              if(encryptLib.comparePassword(password, user.password)) {
                // if all good!
                console.log('passwords match');
                done(null, user);
              } else {
                console.log('password does not match');
                done(null, false, {message: 'Incorrect credentials.'});
              }
            } else {
              console.log('no user');
              done(null, false);
            }

          });
	    });
    }
));


module.exports = passport;
