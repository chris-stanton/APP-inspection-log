
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('./server/strategies/user_sql.js');
var session = require('express-session');
var path = require('path');

// defining route variables
var login = require('./server/routes/login.js');
var init = require('./server/routes/init.js');
var inspection = require('./server/routes/inspection.js');
var userRouter = require('./server/routes/user.js');
var registerRouter = require('./server/routes/register.js');
var indexRouter = require('./server/routes/index_route.js');

//Serve back static middleware files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));

//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
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
app.use('/login', login);
app.use('/init', init);
app.use('/inspection', inspection);
app.use('/register', registerRouter);
app.use('/user', userRouter);

// Catch all bucket, must be last!
app.use('/*', indexRouter);

// port listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
