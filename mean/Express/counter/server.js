// set up this gd server
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var session = require('express-session');
app.use(session({ secret: 'johnahnz0rsisl33t' }));


// routes
app.get('/', function(request, response) {
	if (!request.session.counter) {
		request.session.counter = 1;
	} else {
		request.session.counter += 1;
	}
	response.render('counter', { counter: request.session });
});

app.post('/add2', function(request, response) {
	request.session.counter += 1;
	response.redirect('/');
});

app.post('/reset', function(request, response) {
	request.session.counter = 0;
	response.redirect('/');
});


app.listen(5000, function() {
	console.log('listening on port 5000; johnahnz0rs is l33t');
});