
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('./server/strategies/user_sql.js');
var session = require('express-session');

// defining route variables
var login = require('./server/routes/login.js');
var init = require('./server/routes/init.js');
var inspection = require('./server/routes/inspection.js');

//Serve back static middleware files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})

// Passport Session Configuration
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/login', login); // route for all login views
app.use('/init', init); // route for all views on init that does not need auth
app.use('/inspection', inspection);

// port listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
