
// Dependancies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('./server/strategies/user_sql.js');
const session = require('express-session');

// Defining route variables
const login = require('./server/routes/login.js');
const init = require('./server/routes/init.js');
const inspection = require('./server/routes/inspection.js');
const userRouter = require('./server/routes/user.js');
const registerRouter = require('./server/routes/register.js');
const indexRouter = require('./server/routes/index_route.js');

//Serve back static middleware files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));

//Handles index file separately
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

// starts up passport session
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/login', login);
app.use('/init', init);
app.use('/inspection', inspection);
app.use('/register', registerRouter);
app.use('/user', userRouter);

// Catch all bucket
app.use('/*', indexRouter);

// Port Listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
