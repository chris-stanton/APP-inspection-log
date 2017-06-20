
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var login = require('./server/routes/login.js');
var init = require('./server/routes/init.js');



//Serve back static middleware files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})


// routes
app.use('/login', login);
app.use('/init', init);


// port listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
