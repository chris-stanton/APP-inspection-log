
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// defining route variables
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
app.use('/login', login); // route for all login views
app.use('/init', init); // route for all views on init that does not need auth


// port listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
