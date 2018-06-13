var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var index = require('./routes/index');

// Init App
var app = express();

app.use(cookieParser());

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

var xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());

// Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
	//cookie: { maxAge: 60000 } // login timeout set to 30 mins
}));

app.use('/', index);

// Set Port
app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
	console.log('Server has successfully started on port ' + app.get('port'));
});
